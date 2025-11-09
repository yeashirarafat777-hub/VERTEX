import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [stats, setStats] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0
  });

  const targetStats = {
    projects: 150,
    satisfaction: 98,
    experience: 5
  };

  const duration = 2000; // 2 seconds
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      
      setStats({
        projects: Math.floor(targetStats.projects * progress),
        satisfaction: Math.floor(targetStats.satisfaction * progress),
        experience: Math.floor(targetStats.experience * progress)
      });

      if (frame === totalFrames) {
        clearInterval(timer);
        // Set final values to ensure exact numbers
        setStats(targetStats);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    window.location.href = '/portfolio';
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="relative z-10 w-full px-6 pt-20 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
           

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
             Trusted Reliable and Built to Delivered 
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-muted-foreground lg:mx-0"
            >
              We transform complex business challenges into elegant, 
              performant web solutions using React, Vite, and modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleGetStarted}
                iconName="ArrowRight"
                iconPosition="right"
                className="transition-all duration-300 shadow-lg bg-primary hover:bg-primary/90 hover:shadow-xl"
              >
                View Our Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactUs}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Start Project
              </Button>
            </motion.div>

            {/* Auto Play Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 mt-12 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div 
                  className="text-2xl font-bold md:text-3xl text-primary"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  {stats.projects}+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div 
                  className="text-2xl font-bold md:text-3xl text-primary"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  {stats.satisfaction}%
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div 
                  className="text-2xl font-bold md:text-3xl text-primary"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  {stats.experience}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Only Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img 
                src="/images/hero.gif" 
                alt="Development team working on innovative projects" 
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;