import React, { useEffect } from 'react';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const actions = [
    { 
      label: "Add New Project", 
      icon: "Plus", 
      variant: "default",
      onClick: () => console.log("Add project")
    },
    { 
      label: "Create Blog Post", 
      icon: "FileText", 
      variant: "outline",
      onClick: () => console.log("Create blog")
    },
    { 
      label: "Manage Users", 
      icon: "Users", 
      variant: "outline",
      onClick: () => console.log("Manage users")
    },
    { 
      label: "View Analytics", 
      icon: "BarChart3", 
      variant: "outline",
      onClick: () => console.log("View analytics")
    }
  ];

  useEffect(() => {
    // AOS import kore initialize kora
    const initAOS = async () => {
      const AOS = await import('aos');
      AOS.init({
        duration: 800,
        once: false, // false kore dile sob bar animate hobe
        mirror: true, // scroll up korleo animate hobe
      });
    };

    initAOS();
  }, []);

  return (
    <div 
      className="p-6 border rounded-lg bg-card border-border"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h3 
        className="mb-4 text-lg font-semibold text-card-foreground"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-once="false"
      >
        Quick Actions
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions?.map((action, index) => (
          <Button
            key={index}
            variant={action?.variant}
            iconName={action?.icon}
            iconPosition="left"
            onClick={action?.onClick}
            className="justify-start"
            data-aos="zoom-in"
            data-aos-delay={300 + (index * 100)} // Stagger animation
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            {action?.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;