import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';

import ClientLogos from './components/ClientLogos';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  useEffect(() => {
    // Set page title
   
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const contentText =
      'DevCraft Agency - Where code meets creativity. Premium React development services for ambitious businesses. Transform your vision into exceptional web experiences.';

    if (metaDescription) {
      metaDescription.setAttribute('content', contentText);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = contentText;
      document.head.appendChild(meta);
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <ClientLogos />
        <ServicesPreview />
       
        <CallToAction />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4 space-x-2">
               
                <span className="text-xl font-bold">VERTEX TECH VENTURES</span>
              </div>
              <p className="max-w-md mb-4 text-primary-foreground/80">
                Crafting exceptional React experiences where code meets creativity. 
                Your vision, our expertise.
              </p>
              <div className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} VERTEX TECH VENTURES. All rights reserved.
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => (window.location.href = '/homepage')}
                    className="transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => (window.location.href = '/portfolio')}
                    className="transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => (window.location.href = '/services')}
                    className="transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => (window.location.href = '/about')}
                    className="transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 font-semibold">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li> VERTEX</li>
                <li>+88 01343928093</li>
                <li>BONANI,BOGURA </li>
                <li>
                  <button
                    onClick={() => (window.location.href = '/contact')}
                    className="font-medium transition-colors duration-200 text-accent hover:text-accent/80"
                  >
                    Start Project →
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
