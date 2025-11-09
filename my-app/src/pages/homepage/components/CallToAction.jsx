import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // This ensures animation triggers every time section comes into view
      mirror: true, // This ensures animation triggers when scrolling back up
    });
  }, []);

  const handleStartProject = () => {
    window.location.href = '/contact';
  };

  const handleViewPortfolio = () => {
    window.location.href = '/portfolio';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center"
        >
          <div className="relative">
            {/* Background Elements */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="200"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"
            ></div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="150"
              className="relative z-10 p-6 border shadow-2xl md:p-10 bg-background/80 backdrop-blur-sm rounded-3xl border-border"
            >
              <div>
                <h2 
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl text-primary"
                >
                  Let's Build Something
                  <span 
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"
                  >
                    Extraordinary Together
                  </span>
                </h2>
                
                <p 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="max-w-3xl mx-auto mb-6 text-base leading-relaxed md:text-lg text-muted-foreground"
                >
                  Transform your vision into a powerful web application. Our expert team is ready to 
                  deliver cutting-edge React solutions that drive results and exceed expectations.
                </p>

                <div 
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="flex flex-col justify-center gap-3 mb-6 sm:flex-row"
                >
                  <Button
                    variant="default"
                    size="lg"
                    onClick={handleStartProject}
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="transition-all duration-300 shadow-lg bg-primary hover:bg-primary/90 hover:shadow-xl"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleViewPortfolio}
                    iconName="Eye"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    View Our Work
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div 
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="flex flex-col items-center justify-center space-y-3 text-xs sm:flex-row sm:space-y-0 sm:space-x-6 text-muted-foreground"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-success" />
                    <span>100% Secure Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-success" />
                    <span>On-Time Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={14} className="text-success" />
                    <span>Award-Winning Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;