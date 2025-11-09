import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('web-development');
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const handleCardHover = (categoryId) => {
    setFlippedCards(prev => ({
      ...prev,
      [categoryId]: true
    }));
  };

  const handleCardLeave = (categoryId) => {
    setFlippedCards(prev => ({
      ...prev,
      [categoryId]: false
    }));
  };

  const categories = [
    {
      id: 'web-development',
      name: 'Web Development',
      icon: 'Code2',
      description: 'Full-stack React applications',
      color: 'blue'
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      icon: 'Palette',
      description: 'User-centered design',
      color: 'purple'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: 'Smartphone',
      description: 'Cross-platform solutions',
      color: 'green'
    },
    {
      id: 'consulting',
      name: 'Consulting',
      icon: 'Users',
      description: 'Strategic guidance',
      color: 'orange'
    }
  ];

  const services = {
    'web-development': [
      {
        title: 'React Web Applications',
        description: 'Custom React apps with modern architecture',
        features: ['React 18', 'TypeScript', 'Performance', 'SEO'],
        price: '$5,000+',
        duration: '4-8 weeks',
        icon: 'Globe'
      },
      {
        title: 'E-commerce Solutions',
        description: 'Complete online stores with payments',
        features: ['Payments', 'Inventory', 'Dashboard', 'Mobile'],
        price: '$8,000+',
        duration: '6-12 weeks',
        icon: 'ShoppingCart'
      },
      
      {
        title: 'Enterprise Solutions',
        description: 'Scalable applications for large businesses',
        features: ['Scalability', 'Security', 'Integration', 'Support'],
        price: '$15,000+',
        duration: '12-20 weeks',
        icon: 'Building'
      }
    ],
    'ui-ux-design': [
      {
        title: 'UI/UX Design System',
        description: 'Comprehensive design systems',
        features: ['Components', 'Style Guide', 'Tokens', 'Figma'],
        price: '$3,000+',
        duration: '3-6 weeks',
        icon: 'Layers'
      },
      {
        title: 'UX Audit',
        description: 'Analysis with improvements',
        features: ['Testing', 'Analysis', 'Accessibility', 'Plan'],
        price: '$2,500+',
        duration: '2-4 weeks',
        icon: 'Search'
      },
      {
        title: 'Mobile App Design',
        description: 'Native mobile app interfaces',
        features: ['iOS Design', 'Android Design', 'Prototypes', 'Assets'],
        price: '$4,000+',
        duration: '4-8 weeks',
        icon: 'Smartphone'
      }
    ],
    'mobile-apps': [
      {
        title: 'React Native Apps',
        description: 'Cross-platform mobile apps',
        features: ['iOS & Android', 'Native', 'Shared Code', 'App Store'],
        price: '$10,000+',
        duration: '8-16 weeks',
        icon: 'Smartphone'
      },
      {
        title: 'Flutter Applications',
        description: 'Beautiful native apps with Flutter',
        features: ['Cross-platform', 'Native Performance', 'Material Design', 'Firebase'],
        price: '$12,000+',
        duration: '10-18 weeks',
        icon: 'Smartphone'
      },
      {
        title: 'Hybrid Mobile Apps',
        description: 'Web-based mobile applications',
        features: ['Web Technologies', 'App Stores', 'Offline', 'Plugins'],
        price: '$8,000+',
        duration: '6-12 weeks',
        icon: 'Globe'
      }
    ],
    'consulting': [
      {
        title: 'Technical Architecture',
        description: 'Planning for scalable apps',
        features: ['Planning', 'Tech Stack', 'Scalability', 'Best Practices'],
        price: '$2,000+',
        duration: '1-3 weeks',
        icon: 'Building'
      },
      {
        title: 'Code Review & Audit',
        description: 'Comprehensive code quality assessment',
        features: ['Code Quality', 'Security', 'Performance', 'Recommendations'],
        price: '$1,500+',
        duration: '1-2 weeks',
        icon: 'Search'
      },
      {
        title: 'DevOps Setup',
        description: 'CI/CD pipeline and deployment',
        features: ['CI/CD', 'Deployment', 'Monitoring', 'Automation'],
        price: '$3,000+',
        duration: '2-4 weeks',
        icon: 'Settings'
      }
    ]
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#071428' }}
      data-aos="fade-in"
    >
      <div className="container px-4 mx-auto lg:px-8">
        {/* Section Header */}
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 
            className="mb-4 text-4xl font-bold text-blue lg:text-5xl"
            style={{ 
              fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
            }}
          >
            Our Service Categories
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Comprehensive development services tailored to your business needs.
          </p>
        </div>

        {/* Category Tabs - Larger Size with Better Gap Filling */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;
            const isFlipped = flippedCards[category.id] || isActive;
            
            return (
              <div
                key={category.id}
                className="relative w-56 cursor-pointer h-72 perspective-1000" // Increased size
                onMouseEnter={() => handleCardHover(category.id)}
                onMouseLeave={() => handleCardLeave(category.id)}
                onClick={() => setActiveCategory(category.id)}
                data-aos="zoom-in"
                data-aos-delay={300 + (index * 100)}
              >
                <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}>
                  {/* Front Side */}
                  <div className={`absolute inset-0 backface-hidden rounded-xl border-2 p-8 flex flex-col items-center justify-center ${
                    isActive 
                      ? 'bg-blue-500 border-blue-400 text-white' 
                      : 'bg-[#0f1e38] border-slate-500 text-slate-300 hover:bg-[#132847] hover:border-slate-400'
                  } transition-all duration-300`}>
                    <Icon 
                      name={category.icon} 
                      size={32} // Increased icon size
                      color={isActive ? 'white' : '#60A5FA'} 
                      className="mb-6"
                    />
                    <h3 className="mb-3 text-xl font-bold text-center">{category.name}</h3> {/* Increased text size */}
                    <p className="text-base leading-tight text-center opacity-90">{category.description}</p> {/* Increased text size */}
                  </div>

                  {/* Back Side */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl border-2 p-8 flex flex-col items-center justify-center ${
                    isActive ? 'bg-blue-600 border-blue-400' : 'bg-[#0f1e38] border-slate-500'
                  } transition-all duration-300`}>
                    <Icon 
                      name="CheckCircle" 
                      size={32} // Increased icon size
                      color="#10B981" 
                      className="mb-6"
                    />
                    <h3 className="mb-3 text-xl font-bold text-center text-white">Selected</h3> {/* Increased text size */}
                    <p className="text-base leading-tight text-center text-slate-300">View Services</p> {/* Increased text size */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Cards - All Services Added */}
        <div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {services[activeCategory]?.map((service, index) => (
            <div 
              key={index}
              className="bg-[#0f1e38] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-600 h-[340px] flex flex-col transform hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={500 + (index * 100)}
            >
              <div className="flex flex-col flex-1 p-6">
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <Icon name={service.icon} size={22} color="#071428" />
                </div>

                {/* Service Title */}
                <h3 className="mb-3 text-lg font-bold leading-tight text-white">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="flex-grow-0 mb-4 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex-grow mb-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Feather" size={12} color="#10B981" />
                      <span className="text-xs text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing and Duration */}
                <div className="flex items-center justify-between p-3 mb-4 rounded-lg bg-slate-700/50">
                  <div>
                    <div className="text-base font-bold text-white">{service.price}</div>
                    <div className="text-xs text-slate-400">Starting price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-300">{service.duration}</div>
                    <div className="text-xs text-slate-400">Timeline</div>
                  </div>
                </div>

                {/* CTA Button with #071428 Color */}
                <Button 
                  variant="default" 
                  fullWidth
                  style={{ backgroundColor: '#071428', borderColor: '#334155' }}
                  className="py-2 text-sm text-white transition-all duration-300 border hover:bg-slate-800"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ServiceCategories;