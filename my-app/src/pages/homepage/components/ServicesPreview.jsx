import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      icon: "Code2",
      title: "React Development",
      description: "Custom React applications built with modern hooks, context, and performance optimization techniques.",
      features: ["Component Architecture", "State Management", "Performance Optimization", "Testing & QA"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      icon: "Zap",
      title: "Vite Integration",
      description: "Lightning-fast development experience with Vite's modern build tooling and hot module replacement.",
      features: ["Fast Development", "Optimized Builds", "Plugin Ecosystem", "Modern Tooling"],
      gradient: "from-yellow-500/10 to-orange-500/10",
      iconColor: "text-yellow-500"
    },
    {
      id: 3,
      icon: "Palette",
      title: "Tailwind CSS",
      description: "Utility-first CSS framework implementation for rapid UI development and consistent design systems.",
      features: ["Responsive Design", "Custom Components", "Design Systems", "Performance CSS"],
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-500"
    },
    {
      id: 4,
      icon: "Smartphone",
      title: "Mobile-First Design",
      description: "Responsive web applications that provide exceptional user experiences across all devices and screen sizes.",
      features: ["Progressive Web Apps", "Touch Optimization", "Cross-Platform", "Accessibility"],
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: 5,
      icon: "Database",
      title: "Full-Stack Solutions",
      description: "End-to-end web applications with robust backend integration, API development, and database management.",
      features: ["API Integration", "Database Design", "Authentication", "Cloud Deployment"],
      gradient: "from-red-500/10 to-rose-500/10",
      iconColor: "text-red-500"
    },
    {
      id: 6,
      icon: "Shield",
      title: "Security & Performance",
      description: "Enterprise-grade security implementations with performance monitoring and optimization strategies.",
      features: ["Security Audits", "Performance Monitoring", "Code Optimization", "Best Practices"],
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-500"
    }
  ];

  useEffect(() => {
    // Import AOS dynamically
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false, // This ensures animation triggers every time
        mirror: true, // Elements animate out while scrolling past them
        offset: 50, // Offset (in px) from the original trigger point
        delay: 100, // Values from 0 to 3000, with step 50ms
      });
    });

    return () => {
      // Refresh AOS when component unmounts to ensure smooth re-triggering
      if (typeof window !== 'undefined') {
        import('aos').then((AOS) => {
          AOS.refresh();
        });
      }
    };
  }, []);

  const handleViewServices = () => {
    window.location.href = '/services';
  };

  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-20 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl text-primary">
            Comprehensive Web Development Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            From concept to deployment, we deliver cutting-edge React solutions that drive business growth 
            and provide exceptional user experiences across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="false"
              className="relative group"
            >
              <div className={`relative bg-gradient-to-br ${service?.gradient} p-8 rounded-xl border border-border hover:border-accent/30 transition-all duration-300 h-full`}>
                {/* Service Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-6 transition-transform duration-300 rounded-lg bg-background group-hover:scale-110">
                  <Icon name={service?.icon} size={24} className={service?.iconColor} />
                </div>

                {/* Service Content */}
                <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 text-primary group-hover:text-accent">
                  {service?.title}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service?.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service?.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="false"
          className="flex flex-col justify-center gap-4 mt-12 sm:flex-row"
        >
          <Button
            onClick={handleViewServices}
            variant="outline"
            className="px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
          >
            View All Services
          </Button>
          <Button
            onClick={handleGetQuote}
            className="px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;