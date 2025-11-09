import React, { useState, useEffect } from 'react';
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

  const duration = 2000;
  const frameRate = 1000 / 60;
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
        setStats(targetStats);
      }
    }, frameRate);
    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => (window.location.href = '/portfolio');
  const handleContactUs = () => (window.location.href = '/contact');

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header Spacer for Mobile */}
      <div className="absolute top-0 left-0 w-full h-16 lg:hidden" />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: '20s' }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 pt-16 mx-auto max-w-7xl lg:px-8 lg:pt-20">

        {/* Mobile Heading - Section Top */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:hidden"
          style={{ fontFamily: 'Book Antiqua, serif' }}
        >
          Trusted Reliable and Built to Delivered
        </motion.h1>

        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 w-full lg:hidden"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="/images/hero.gif"
                alt="Development team working on innovative projects"
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Left Content - Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 w-full text-center lg:text-left lg:order-1"
          >
            {/* Desktop Heading Only */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl lg:block"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Trusted Reliable and Built to Delivered
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-6 text-base md:text-lg text-muted-foreground lg:mx-0 lg:mb-8"
            >
              We transform complex business challenges into elegant,
              performant web solutions using React, Vite, and modern technologies.
            </motion.p>

            {/* Desktop CTA Buttons - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden gap-4 mb-10 lg:flex"
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
              className="grid grid-cols-3 gap-4 pt-6 mt-4 border-t border-border/50 sm:gap-6 sm:pt-8 sm:mt-8"
            >
              <div className="text-center lg:text-left">
                <div
                  className="text-xl font-bold sm:text-2xl md:text-3xl text-primary"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  {stats.projects}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-xl font-bold sm:text-2xl md:text-3xl text-primary"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  {stats.satisfaction}%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-xl font-bold sm:text-2xl md:text-3xl text-primary"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  {stats.experience}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* Mobile CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col justify-center gap-3 mt-8 mb-6 sm:flex-row lg:hidden"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleGetStarted}
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full transition-all duration-300 shadow-lg sm:w-auto bg-primary hover:bg-primary/90 hover:shadow-xl"
              >
                View Our Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactUs}
                iconName="MessageCircle"
                iconPosition="left"
                className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Start Project
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Desktop Image Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative order-2 hidden lg:block"
          >
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
