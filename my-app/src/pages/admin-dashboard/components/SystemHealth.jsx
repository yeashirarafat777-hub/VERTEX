import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SystemHealth = () => {
  const healthMetrics = [
    {
      name: "Server Status",
      status: "healthy",
      value: "99.9%",
      description: "Uptime last 30 days"
    },
    {
      name: "Database",
      status: "healthy",
      value: "2.1ms",
      description: "Average response time"
    },
    {
      name: "CDN Performance",
      status: "warning",
      value: "156ms",
      description: "Global average latency"
    },
    {
      name: "Security Score",
      status: "healthy",
      value: "A+",
      description: "SSL Labs rating"
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'critical':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return 'CheckCircle';
      case 'warning':
        return 'AlertTriangle';
      case 'critical':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div 
      className="p-6 border rounded-lg bg-card border-border"
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-duration="800"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 
          className="text-lg font-semibold text-card-foreground"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-once="false"
        >
          System Health
        </h3>
        <div 
          className="flex items-center space-x-2"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-once="false"
        >
          <Icon name="Activity" size={16} className="text-success" />
          <span className="text-sm font-medium text-success">All Systems Operational</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {healthMetrics?.map((metric, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 rounded-md bg-muted/30"
            data-aos="zoom-in"
            data-aos-delay={200 + (index * 100)} // Stagger animation
            data-aos-duration="600"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="flex items-center space-x-3">
              <Icon 
                name={getStatusIcon(metric?.status)} 
                size={20} 
                className={getStatusColor(metric?.status)} 
              />
              <div>
                <p className="text-sm font-medium text-card-foreground">{metric?.name}</p>
                <p className="text-xs text-muted-foreground">{metric?.description}</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-card-foreground">{metric?.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealth;