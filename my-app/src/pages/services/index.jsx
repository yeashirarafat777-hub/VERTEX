import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';

import ServiceCategories from './components/ServiceCategories';
import TechnologyStack from './components/TechnologyStack';
import ServiceConfigurator from './components/ServiceConfigurator';

import ProcessTimeline from './components/ProcessTimeline';

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
   
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Comprehensive React development services including web applications, e-commerce solutions, PWAs, and mobile apps. Expert React, Vite, and Tailwind CSS development with modern architecture.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
     
      
      {/* Service Categories */}
      <ServiceCategories />
      
      {/* Technology Stack */}
      <TechnologyStack />
      
      {/* Interactive Service Configurator */}
      <ServiceConfigurator />
      
      {/* Service Package Comparison */}
      
      
      {/* Development Process Timeline */}
      <ProcessTimeline />
      
      {/* Footer CTA Section */}
      
    </div>
  );
};

export default Services;