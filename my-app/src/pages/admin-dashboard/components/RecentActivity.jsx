import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "project",
      title: "New project created",
      description: "E-commerce Platform for TechCorp",
      user: "Sarah Johnson",
      timestamp: "2 hours ago",
      icon: "FolderPlus",
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "client",
      title: "Client onboarded",
      description: "Digital Marketing Agency - WebFlow Solutions",
      user: "Mike Chen",
      timestamp: "4 hours ago",
      icon: "UserPlus",
      color: "text-green-600"
    },
    {
      id: 3,
      type: "content",
      title: "Blog post published",
      description: "React 18 Performance Optimization Guide",
      user: "Alex Rodriguez",
      timestamp: "6 hours ago",
      icon: "FileText",
      color: "text-purple-600"
    },
    {
      id: 4,
      type: "system",
      title: "Backup completed",
      description: "Weekly automated backup successful",
      user: "System",
      timestamp: "8 hours ago",
      icon: "Database",
      color: "text-orange-600"
    },
    {
      id: 5,
      type: "security",
      title: "Security scan completed",
      description: "No vulnerabilities detected",
      user: "Security Bot",
      timestamp: "12 hours ago",
      icon: "Shield",
      color: "text-green-600"
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
      <div className="flex items-center justify-between mb-4">
        <h3 
          className="text-lg font-semibold text-card-foreground"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="false"
        >
          Recent Activity
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          iconName="ExternalLink"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="false"
        >
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <div 
            key={activity?.id} 
            className="flex items-start p-3 space-x-3 transition-colors duration-150 rounded-md hover:bg-muted/50"
            data-aos="fade-right"
            data-aos-delay={300 + (index * 100)} // Stagger animation
            data-aos-duration="600"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div 
              className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${activity?.color}`}
              data-aos="zoom-in"
              data-aos-delay={400 + (index * 100)}
              data-aos-once="false"
            >
              <Icon name={activity?.icon} size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground">{activity?.title}</p>
              <p className="text-sm truncate text-muted-foreground">{activity?.description}</p>
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <span>{activity?.user}</span>
                <span className="mx-1">•</span>
                <span>{activity?.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;