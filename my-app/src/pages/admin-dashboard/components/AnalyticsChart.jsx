import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AnalyticsChart = () => {
  const trafficData = [
    { name: 'Jan', visitors: 4000, pageViews: 8400, conversions: 240 },
    { name: 'Feb', visitors: 3000, pageViews: 6398, conversions: 210 },
    { name: 'Mar', visitors: 2000, pageViews: 4800, conversions: 290 },
    { name: 'Apr', visitors: 2780, pageViews: 5908, conversions: 320 },
    { name: 'May', visitors: 1890, pageViews: 4800, conversions: 181 },
    { name: 'Jun', visitors: 2390, pageViews: 5800, conversions: 250 },
    { name: 'Jul', visitors: 3490, pageViews: 7300, conversions: 410 }
  ];

  const conversionData = [
    { name: 'Contact Forms', value: 45, color: '#3B82F6' },
    { name: 'Project Inquiries', value: 32, color: '#10B981' },
    { name: 'Newsletter Signups', value: 28, color: '#F59E0B' },
    { name: 'Consultation Bookings', value: 15, color: '#EF4444' }
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
        className="mb-6 text-lg font-semibold text-card-foreground"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-once="false"
      >
        Analytics Overview
      </h3>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Traffic Trends */}
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="700"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h4 className="mb-4 text-sm font-medium text-card-foreground">Traffic Trends (Last 7 Months)</h4>
          <div className="h-64" aria-label="Website Traffic Trends Line Chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  stroke="#64748B" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="#64748B" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="Visitors"
                />
                <Line 
                  type="monotone" 
                  dataKey="pageViews" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  name="Page Views"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Sources */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="700"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h4 className="mb-4 text-sm font-medium text-card-foreground">Conversion Sources (This Month)</h4>
          <div className="h-64" aria-label="Conversion Sources Bar Chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  type="number" 
                  stroke="#64748B" 
                  fontSize={12}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke="#64748B" 
                  fontSize={12}
                  width={120}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#3B82F6"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div 
        className="pt-6 mt-6 border-t border-border"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h4 
          className="mb-4 text-sm font-medium text-card-foreground"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-once="false"
        >
          Key Performance Indicators
        </h4>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "4.2%", label: "Conversion Rate", color: "text-primary" },
            { value: "2.8min", label: "Avg. Session", color: "text-success" },
            { value: "68%", label: "Bounce Rate", color: "text-warning" },
            { value: "$12.5K", label: "Monthly Revenue", color: "text-accent" }
          ]?.map((metric, index) => (
            <div 
              key={index}
              className="p-3 text-center rounded-md bg-muted/30"
              data-aos="zoom-in"
              data-aos-delay={700 + (index * 100)}
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;