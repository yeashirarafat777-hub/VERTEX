import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    services: [],
    hasExistingDesign: false,
    needsHosting: false,
    requiresMaintenance: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const projectTypes = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'corporate', label: 'Corporate Website' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'saas', label: 'SaaS Platform' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-2months', label: '1-2 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const serviceOptions = [
    { value: 'ui-design', label: 'UI/UX Design' },
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'Ongoing Maintenance' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleServiceToggle = (serviceValue) => {
    setFormData(prev => ({
      ...prev,
      services: prev?.services?.includes(serviceValue)
        ? prev?.services?.filter(s => s !== serviceValue)
        : [...prev?.services, serviceValue]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.projectType) newErrors.projectType = 'Project type is required';
    if (!formData?.budget) newErrors.budget = 'Budget range is required';
    if (!formData?.description?.trim()) newErrors.description = 'Project description is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData?.email && !emailRegex?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        services: [],
        hasExistingDesign: false,
        needsHosting: false,
        requiresMaintenance: false
      });
    } catch (error) {
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#071428' }}
      data-aos="fade-in"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* ✅ Custom font only here */}
          <h2 
            className="mb-4 text-4xl font-bold text-blue md:text-5xl"
            style={{ fontFamily: '"Book Antiqua", "Palatino Linotype", serif' }}
          >
            Start Your Project
          </h2>

          <p 
            className="max-w-2xl mx-auto text-lg text-slate-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tell us about your project and we'll provide you with a detailed proposal and timeline.
          </p>
        </div>

        <div 
          className="bg-[#071428] border border-slate-700 rounded-2xl p-8 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div 
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
            </div>

            <div 
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Input
                label="Company Name"
                type="text"
                placeholder="Your Company (Optional)"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
              />
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
              />
            </div>

            <div 
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Select
                label="Project Type"
                placeholder="Select project type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                error={errors?.projectType}
                required
              />
              
              <Select
                label="Budget Range"
                placeholder="Select budget"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                error={errors?.budget}
                required
              />
              
              <Select
                label="Timeline"
                placeholder="Select timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="700">
              <label className="block mb-3 text-sm font-medium text-white">
                Services Needed
              </label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {serviceOptions?.map((service, index) => (
                  <div
                    key={service?.value}
                    data-aos="zoom-in"
                    data-aos-delay={800 + (index * 50)}
                  >
                    <Checkbox
                      label={service?.label}
                      checked={formData?.services?.includes(service?.value)}
                      onChange={() => handleServiceToggle(service?.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="900">
              <label className="block mb-2 text-sm font-medium text-white">
                Project Description *
              </label>
              <textarea
                className="w-full min-h-[120px] px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical bg-slate-800 text-white placeholder-slate-400"
                placeholder="Describe your project, goals, target audience, and any specific requirements..."
                value={formData?.description}
                onChange={(e) => handleInputChange('description', e?.target?.value)}
              />
              {errors?.description && (
                <p className="mt-1 text-sm text-red-400">{errors?.description}</p>
              )}
            </div>

            <div 
              className="space-y-3"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <Checkbox
                label="I have existing designs/wireframes"
                checked={formData?.hasExistingDesign}
                onChange={(e) => handleInputChange('hasExistingDesign', e?.target?.checked)}
              />
              
              <Checkbox
                label="I need hosting and deployment services"
                checked={formData?.needsHosting}
                onChange={(e) => handleInputChange('needsHosting', e?.target?.checked)}
              />
              
              <Checkbox
                label="I'm interested in ongoing maintenance"
                checked={formData?.requiresMaintenance}
                onChange={(e) => handleInputChange('requiresMaintenance', e?.target?.checked)}
              />
            </div>

            <div 
              className="pt-6"
              data-aos="zoom-in"
              data-aos-delay="1100"
            >
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="text-white bg-blue-800 border-blue-500 hover:bg-blue-700"
              >
                {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
              </Button>
              
              <p className="mt-3 text-xs text-center text-slate-400">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiryForm;
