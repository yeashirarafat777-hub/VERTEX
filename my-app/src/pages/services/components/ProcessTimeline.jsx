import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcessTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const processSteps = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 weeks',
      description: 'We start by understanding your business goals, target audience, and technical requirements.',
      icon: 'Search',
      color: 'blue',
      activities: [
        'Stakeholder interviews and requirement gathering',
        'Market research and competitor analysis',
        'Technical architecture planning',
        'Project timeline and milestone definition',
        'Risk assessment and mitigation strategies'
      ]
    },
    {
      phase: 'Design & Prototyping',
      duration: '2-3 weeks',
      description: 'Creating user-centered designs and interactive prototypes to validate the user experience.',
      icon: 'Palette',
      color: 'purple',
      activities: [
        'User experience (UX) research and personas',
        'Wireframing and information architecture',
        'Visual design and brand integration',
        'Interactive prototype development',
        'Usability testing and design iteration'
      ]
    },
    {
      phase: 'Development',
      duration: '4-12 weeks',
      description: 'Building your application with modern React technologies and best practices.',
      icon: 'Code2',
      color: 'green',
      activities: [
        'Frontend development with React 18',
        'Backend API development and integration',
        'Database design and implementation',
        'Third-party service integrations',
        'Performance optimization and testing'
      ]
    },
    {
      phase: 'Testing & Quality Assurance',
      duration: '1-2 weeks',
      description: 'Comprehensive testing to ensure your application works flawlessly across all devices.',
      icon: 'Shield',
      color: 'orange',
      activities: [
        'Automated testing suite development',
        'Cross-browser and device testing',
        'Performance and load testing',
        'Security vulnerability assessment',
        'User acceptance testing (UAT)'
      ]
    },
    {
      phase: 'Deployment & Launch',
      duration: '1 week',
      description: 'Deploying your application to production with monitoring and optimization.',
      icon: 'Rocket',
      color: 'red',
      activities: [
        'Production environment setup',
        'Domain and SSL certificate configuration',
        'Performance monitoring implementation',
        'SEO optimization and analytics setup',
        'Go-live support and monitoring'
      ]
    },
    {
      phase: 'Support & Maintenance',
      duration: 'Ongoing',
      description: 'Continuous support, updates, and enhancements to keep your application running smoothly.',
      icon: 'Settings',
      color: 'cyan',
      activities: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Feature enhancements and improvements',
        'Technical support and troubleshooting',
        'Analytics reporting and insights'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-500/20',
        dark: 'bg-blue-600',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
        icon: '#60A5FA'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-500/20',
        dark: 'bg-purple-600',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        icon: '#A78BFA'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-500/20',
        dark: 'bg-green-600',
        text: 'text-green-400',
        border: 'border-green-500/30',
        icon: '#34D399'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-500/20',
        dark: 'bg-orange-600',
        text: 'text-orange-400',
        border: 'border-orange-500/30',
        icon: '#FBBF24'
      },
      red: {
        bg: 'bg-red-500',
        light: 'bg-red-500/20',
        dark: 'bg-red-600',
        text: 'text-red-400',
        border: 'border-red-500/30',
        icon: '#F87171'
      },
      cyan: {
        bg: 'bg-cyan-500',
        light: 'bg-cyan-500/20',
        dark: 'bg-cyan-600',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30',
        icon: '#22D3EE'
      }
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section 
      className="py-20" 
      style={{ backgroundColor: '#071428' }}
      data-aos="fade-in"
    >
      <div className="container px-6 mx-auto lg:px-8">
        {/* Section Header */}
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 
            className="mb-6 text-4xl font-bold lg:text-5xl"
            
          >
            Our Development Process
          </h2>
          <p 
            className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We follow a proven methodology that ensures quality, transparency, and timely delivery. 
            Here's how we transform your ideas into exceptional web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 rounded-full left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 via-red-500 to-cyan-500"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>

            {/* Process Steps */}
            <div className="space-y-16 lg:space-y-20">
              {processSteps?.map((step, index) => {
                const colorClasses = getColorClasses(step?.color);
                const isEven = index % 2 === 0;

                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay={400 + (index * 100)}
                  >
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 ${colorClasses?.bg} rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-[#071428] transition-all duration-300 hover:scale-110`}
                      data-aos="zoom-in"
                      data-aos-delay={500 + (index * 100)}
                    >
                      <Icon name={step?.icon} size={24} color="white" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-24 lg:ml-0 lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                      <div 
                        className="bg-[#071428] rounded-2xl shadow-lg p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        data-aos="zoom-in"
                        data-aos-delay={600 + (index * 100)}
                      >
                        {/* Phase Header */}
                        <div className="mb-6">
                          <div className={`inline-flex items-center space-x-2 ${colorClasses?.light} ${colorClasses?.text} px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${colorClasses?.border}`}>
                            <Icon name="Clock" size={16} />
                            <span>{step?.duration}</span>
                          </div>
                          <h3 className="mb-3 text-2xl font-bold text-white">
                            {step?.phase}
                          </h3>
                          <p className="leading-relaxed text-slate-300">
                            {step?.description}
                          </p>
                        </div>

                        {/* Activities List */}
                        <div>
                          <h4 className={`font-semibold text-white mb-4 flex items-center space-x-2 ${colorClasses?.text}`}>
                            <Icon name="List" size={18} />
                            <span>Key Activities:</span>
                          </h4>
                          <ul className="space-y-3">
                            {step?.activities?.map((activity, activityIndex) => (
                              <li 
                                key={activityIndex} 
                                className="flex items-start space-x-3"
                                data-aos="fade-up"
                                data-aos-delay={700 + (activityIndex * 50)}
                              >
                                <Icon name="CheckCircle" size={16} color={colorClasses?.icon} className="mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed text-slate-300">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step Number (Desktop) */}
                    <div className={`hidden lg:block lg:w-2/12 text-center ${isEven ? 'order-first' : 'order-last'}`}>
                      <div 
                        className={`inline-flex items-center justify-center w-12 h-12 ${colorClasses?.light} ${colorClasses?.text} rounded-full font-bold text-lg border-2 ${colorClasses?.border} shadow-sm`}
                        data-aos="zoom-in"
                        data-aos-delay={800 + (index * 100)}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div 
          className="mt-20"
          data-aos="fade-up"
          data-aos-delay="900"
        >
        
        </div>

        {/* Final CTA */}
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <div className="bg-[#071428] rounded-2xl p-8 text-white border border-slate-700">
            <h3 
              className="mb-4 text-2xl font-bold"
              style={{ 
                fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
              }}
            >
              Ready to Start Your Project?
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-slate-300">
              Let's discuss your ideas and create something amazing together. Our process ensures your success.
            </p>
            <button 
              className="px-8 py-3 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg--600 hover:bg-blue-700 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;