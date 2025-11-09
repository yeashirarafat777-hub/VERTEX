import React, { useRef } from 'react';
import Header from '../../components/ui/Header';

import ProjectInquiryForm from './components/ProjectInquiryForm';
import ConsultationBooking from './components/ConsultationBooking';

import OfficeLocation from './components/OfficeLocation';

const Contact = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef?.current) {
      formRef?.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
        
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
     
      <div ref={formRef}>
        <ProjectInquiryForm />
      </div>
      
      <ConsultationBooking />
     
     <OfficeLocation />
      
     
    </div>
  );
};

export default Contact;