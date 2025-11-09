import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';

import TeamSection from './components/TeamSection';
import SkillsMatrix from './components/SkillsMatrix';
import CultureSection from './components/CultureSection';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Meet the digital craftspeople behind DevCraft Agency. Learn about our mission, values, team expertise, and culture that drives exceptional React development solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
       
       
        <CultureSection />
        
        
        <SkillsMatrix />
        
        
       <TeamSection />
        
        
        
      </main>
    </div>
  );
};

export default About;