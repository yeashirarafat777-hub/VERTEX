import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  // Generate next 14 days for booking
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  const availableTimes = [
    { value: '09:00', label: '9:00 AM EST' },
    { value: '10:00', label: '10:00 AM EST' },
    { value: '11:00', label: '11:00 AM EST' },
    { value: '14:00', label: '2:00 PM EST' },
    { value: '15:00', label: '3:00 PM EST' },
    { value: '16:00', label: '4:00 PM EST' }
  ];

  const consultationTypes = [
    { 
      value: 'discovery', 
      label: 'Discovery Call (30 min)',
      description: 'Discuss your project requirements and goals'
    },
    { 
      value: 'technical', 
      label: 'Technical Consultation (45 min)',
      description: 'Deep dive into technical architecture and solutions'
    },
    { 
      value: 'strategy', 
      label: 'Strategy Session (60 min)',
      description: 'Comprehensive project planning and roadmap'
    }
  ];

  const handleInputChange = (field, value) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsBooking(true);

    try {
      // Simulate booking API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`Consultation booked successfully!\n\nDate: ${selectedDate}\nTime: ${selectedTime}\nType: ${consultationType}\n\nYou'll receive a calendar invite shortly.`);
      
      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setConsultationType('');
      setContactInfo({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
    } catch (error) {
      alert('Booking failed. Please try again or contact us directly.');
    } finally {
      setIsBooking(false);
    }
  };

  const isFormValid = selectedDate && selectedTime && consultationType && 
                     contactInfo.name && contactInfo.email;

  return (
    <section 
      className="py-20"
      style={{ 
      
        fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
      }}
      data-aos="fade-in"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Book a Free Consultation
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg text-slate-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Schedule a personalized consultation to discuss your project and explore how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Consultation Types */}
          <div className="lg:col-span-1">
            <h3 
              className="mb-4 text-xl font-semibold text-blue"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Choose Your Session
            </h3>
            <div className="space-y-3">
              {consultationTypes.map((type, index) => (
                <div
                  key={type.value}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    consultationType === type.value
                      ? 'border-blue-500 bg-blue-500/10' :'border-slate-600 hover:border-blue-500/50'
                  }`}
                  onClick={() => setConsultationType(type.value)}
                  data-aos="fade-right"
                  data-aos-delay={500 + (index * 100)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 mt-1 ${
                      consultationType === type.value
                        ? 'border-blue-500 bg-blue-500' :'border-slate-400'
                    }`}>
                      {consultationType === type.value && (
                        <div className="w-full h-full scale-50 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{type.label}</h4>
                      <p className="mt-1 text-sm text-slate-300">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div 
              className="p-4 mt-8 border rounded-lg bg-slate-800/50 border-slate-700"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h4 className="mb-3 font-medium text-blue">
                What You'll Get:
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-400" />
                  <span>Expert technical guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-400" />
                  <span>Project scope assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-400" />
                  <span>Technology recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-400" />
                  <span>Timeline and budget estimate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div 
              className="bg-[#071428] border border-slate-700 rounded-2xl p-6 shadow-lg"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <form onSubmit={handleBooking} className="space-y-6">
                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-delay="500">
                  <Select
                    label="Select Date"
                    placeholder="Choose a date"
                    options={generateAvailableDates()}
                    value={selectedDate}
                    onChange={setSelectedDate}
                    required
                  />
                  <Select
                    label="Select Time"
                    placeholder="Choose a time"
                    options={availableTimes}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    required
                    disabled={!selectedDate}
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-delay="600">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    value={contactInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="john@company.com"
                    value={contactInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-delay="700">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={contactInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    placeholder="Your Company (Optional)"
                    value={contactInfo.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                {/* Message */}
                <div data-aos="fade-up" data-aos-delay="800">
                  <label className="block mb-2 text-sm font-medium text-blue">
                    Brief Project Description
                  </label>
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical bg-slate-800 text-white placeholder-slate-400"
                    placeholder="Tell us briefly about your project so we can prepare for our discussion..."
                    value={contactInfo.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <div data-aos="zoom-in" data-aos-delay="900">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isBooking}
                    disabled={!isFormValid}
                    iconName="Calendar"
                    iconPosition="right"
                    className="text-white bg-blue-600 border-blue-500 hover:bg-blue-700"
                  >
                    {isBooking ? 'Booking...' : 'Book Consultation'}
                  </Button>
                </div>

                <p className="text-xs text-center text-slate-400" data-aos="fade-up" data-aos-delay="1000">
                  Free consultation • No commitment required • Cancel anytime
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
