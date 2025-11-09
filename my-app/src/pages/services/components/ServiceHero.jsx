import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section 
      className="relative min-h-[85vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center"
      data-aos="fade-in"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute rounded-full top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl animate-pulse"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <div 
          className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"
          data-aos="zoom-in"
          data-aos-delay="400"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          data-aos="zoom-out"
          data-aos-delay="600"
        ></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container relative z-10 w-full px-6 mx-auto lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-6 py-3 mb-8 space-x-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <Icon name="Sparkles" size={18} color="#60A5FA" />
            <span className="font-medium text-blue-300">Premium Development Services</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="mb-6 text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl"
            style={{ 
              fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif",
              color: '#071428'
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Crafting Digital
            <span 
              className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed lg:text-2xl text-slate-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Transform your vision into powerful web applications with our expert React development services. 
            From concept to deployment, we deliver exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-14"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Button 
              variant="default" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-white border-white/30 hover:bg-white/10"
              iconName="Play"
              iconPosition="left"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid max-w-4xl grid-cols-2 gap-8 mx-auto lg:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {[
              { number: "150+", label: "Projects Delivered", icon: "CheckCircle" },
              { number: "98%", label: "Client Satisfaction", icon: "Heart" },
              { number: "5+", label: "Years Experience", icon: "Award" },
              { number: "24/7", label: "Support Available", icon: "Clock" }
            ]?.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={700 + (index * 100)}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Icon name={stat?.icon} size={24} color="#60A5FA" />
                </div>
                <div className="mb-1 text-3xl font-bold text-white">{stat?.number}</div>
                <div className="text-sm text-slate-400">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;