import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OfficeLocation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const officeInfo = {
    address: "BOGURA CITY",
    city: "BOGURA",
    country: "BANGLADESH",
    phone: "01343928093",
    email: "webzone7080@gmail.com",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST" },
      { day: "Saturday", time: "10:00 AM - 2:00 PM EST" },
      { day: "Sunday", time: "Closed" }
    ],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  };

  const handleDirections = () => {
    const query = encodeURIComponent(`${officeInfo?.address}, ${officeInfo?.city}`);
    window.open(`https://maps.app.goo.gl/7DfxJquh1RE24yXs6?q=${query}`, '_blank');
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#071428' }}
      data-aos="fade-in"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 
            className="mb-4 text-4xl font-bold md:text-5xl"
           
          >
            Visit Our Office
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg text-slate-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Located in the heart of San Francisco's tech district. Drop by for a coffee and let's discuss your project in person.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Office Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <div 
              className="p-6 border bg-[#071428] border-slate-700 rounded-xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg">
                  <Icon name="MapPin" size={24} color="white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 
                    className="mb-2 text-xl font-semibold text-white"
                    style={{ 
                      fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
                    }}
                  >
                    Our Address
                  </h3>
                  <p className="mb-1 text-slate-300">{officeInfo?.address}</p>
                  <p className="mb-4 text-slate-300">{officeInfo?.city}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDirections}
                    iconName="Navigation"
                    iconPosition="left"
                    className="text-blue-400 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div 
              className="p-6 border bg-[#071428] border-slate-700 rounded-xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h3 
                className="mb-4 text-xl font-semibold text-white"
                style={{ 
                  fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
                }}
              >
                Contact Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-blue-400" />
                  <span className="text-slate-300">{officeInfo?.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-blue-400" />
                  <span className="text-slate-300">{officeInfo?.email}</span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div 
              className="p-6 border bg-[#071428] border-slate-700 rounded-xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <h3 
                className="mb-4 text-xl font-semibold text-white"
                style={{ 
                  fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
                }}
              >
                Office Hours
              </h3>
              <div className="space-y-2">
                {officeInfo?.hours?.map((schedule, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-1"
                    data-aos="fade-up"
                    data-aos-delay={600 + (index * 100)}
                  >
                    <span className="text-slate-300">{schedule?.day}</span>
                    <span className="font-medium text-white">{schedule?.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div 
              className="p-6 border bg-[#071428] border-slate-700 rounded-xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <h3 
                className="mb-4 text-xl font-semibold text-white"
                style={{ 
                  fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
                }}
              >
                Office Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Wifi", label: "Free WiFi" },
                  { icon: "Coffee", label: "Coffee & Tea" },
                  { icon: "Car", label: "Parking Available" },
                  { icon: "Shield", label: "Secure Building" },
                  { icon: "Users", label: "Meeting Rooms" },
                  { icon: "Accessibility", label: "Accessible" }
                ]?.map((amenity, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2"
                    data-aos="zoom-in"
                    data-aos-delay={800 + (index * 50)}
                  >
                    <Icon name={amenity?.icon} size={16} className="text-blue-400" />
                    <span className="text-sm text-slate-300">{amenity?.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div 
            className="overflow-hidden border bg-[#071428] border-slate-700 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <div className="h-full min-h-[500px] relative">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="DevCraft Agency Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}&z=15&output=embed`}
                className="absolute inset-0 w-full h-full"
              />
              
              {/* Map Overlay Info */}
              <div 
                className="absolute p-4 rounded-lg shadow-lg top-4 left-4 right-4 bg-[#071428]/95 backdrop-blur-sm border border-slate-600"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                    <Icon name="MapPin" size={18} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold text-white"
                      style={{ 
                        fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
                      }}
                    >
                      VERTEX
                    </h4>
                    <p className="text-sm text-slate-300">{officeInfo?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div 
          className="mt-12 p-8 border bg-[#071428] border-slate-700 rounded-xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <h3 
            className="mb-6 text-2xl font-semibold text-center text-white"
            style={{ 
              fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
            }}
          >
            Getting Here
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "Train",
                title: "Public Transit",
                description: "5 min walk from Montgomery St. BART/Muni station"
              },
              {
                icon: "Car",
                title: "Parking",
                description: "Multiple parking garages within 2 blocks"
              },
              {
                icon: "Bike",
                title: "Bike Friendly",
                description: "Bike racks available and Bay Wheels station nearby"
              }
            ]?.map((transport, index) => (
              <div 
                key={index} 
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={1200 + (index * 100)}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-blue-600 rounded-lg">
                  <Icon name={transport?.icon} size={24} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">{transport?.title}</h4>
                <p className="text-sm text-slate-300">{transport?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;