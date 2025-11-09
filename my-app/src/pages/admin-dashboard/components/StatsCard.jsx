import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ title, value, change, changeType, icon, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    red: "bg-red-50 text-red-600 border-red-200"
  };

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
      className="p-6 transition-shadow duration-200 border rounded-lg bg-card border-border hover:shadow-md"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-mirror="true"
      data-aos-once="false" // sob bar animate hobe
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="mb-1 text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-card-foreground">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <Icon 
                name={changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
                className={changeType === 'increase' ? 'text-success' : 'text-destructive'} 
              />
              <span className={`text-sm ml-1 ${changeType === 'increase' ? 'text-success' : 'text-destructive'}`}>
                {change}
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses?.[color]}`}>
          <Icon name={icon} size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;