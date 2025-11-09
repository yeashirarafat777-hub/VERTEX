import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceConfigurator = () => {
  const [configuration, setConfiguration] = useState({
    projectType: '',
    timeline: '',
    features: [],
    complexity: '',
    teamSize: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [showEstimate, setShowEstimate] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    calculateEstimate();
  }, [configuration]);

  const projectTypes = [
    { value: 'web-app', label: 'Web Application', basePrice: 5000 },
    { value: 'ecommerce', label: 'E-commerce Store', basePrice: 8000 },
    { value: 'pwa', label: 'Progressive Web App', basePrice: 6500 },
    { value: 'mobile-app', label: 'Mobile Application', basePrice: 10000 },
    { value: 'landing-page', label: 'Landing Page', basePrice: 2500 },
    { value: 'dashboard', label: 'Admin Dashboard', basePrice: 4000 }
  ];

  const timelines = [
    { value: 'rush', label: '2-4 weeks (Rush)', multiplier: 1.5 },
    { value: 'standard', label: '4-8 weeks (Standard)', multiplier: 1.0 },
    { value: 'extended', label: '8-16 weeks (Extended)', multiplier: 0.8 }
  ];

  const features = [
    { id: 'authentication', label: 'User Authentication', price: 1500 },
    { id: 'payment', label: 'Payment Integration', price: 2000 },
    { id: 'admin-panel', label: 'Admin Panel', price: 2500 },
    { id: 'api-integration', label: 'Third-party API Integration', price: 1000 },
    { id: 'real-time', label: 'Real-time Features', price: 2000 },
    { id: 'analytics', label: 'Analytics Dashboard', price: 1500 },
    { id: 'seo', label: 'SEO Optimization', price: 800 },
    { id: 'pwa-features', label: 'PWA Features', price: 1200 },
    { id: 'multi-language', label: 'Multi-language Support', price: 1000 },
    { id: 'advanced-search', label: 'Advanced Search', price: 1500 }
  ];

  const complexityLevels = [
    { value: 'simple', label: 'Simple', multiplier: 0.8 },
    { value: 'moderate', label: 'Moderate', multiplier: 1.0 },
    { value: 'complex', label: 'Complex', multiplier: 1.3 },
    { value: 'enterprise', label: 'Enterprise', multiplier: 1.6 }
  ];

  const teamSizes = [
    { value: 'solo', label: '1 Developer', multiplier: 1.0 },
    { value: 'small', label: '2-3 Developers', multiplier: 1.2 },
    { value: 'medium', label: '4-6 Developers', multiplier: 1.5 },
    { value: 'large', label: '7+ Developers', multiplier: 2.0 }
  ];

  const calculateEstimate = () => {
    if (!configuration?.projectType) {
      setEstimatedPrice(0);
      setShowEstimate(false);
      return;
    }

    const projectType = projectTypes?.find(p => p?.value === configuration?.projectType);
    const timeline = timelines?.find(t => t?.value === configuration?.timeline);
    const complexity = complexityLevels?.find(c => c?.value === configuration?.complexity);
    const teamSize = teamSizes?.find(ts => ts?.value === configuration?.teamSize);

    let basePrice = projectType?.basePrice || 0;
    
    // Add feature costs
    const featureCosts = configuration?.features?.reduce((total, featureId) => {
      const feature = features?.find(f => f?.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    basePrice += featureCosts;

    // Apply multipliers
    if (timeline) basePrice *= timeline?.multiplier;
    if (complexity) basePrice *= complexity?.multiplier;
    if (teamSize) basePrice *= teamSize?.multiplier;

    setEstimatedPrice(Math.round(basePrice));
    setShowEstimate(true);
  };

  const handleFeatureChange = (featureId, checked) => {
    setConfiguration(prev => ({
      ...prev,
      features: checked 
        ? [...prev?.features, featureId]
        : prev?.features?.filter(id => id !== featureId)
    }));
  };

  const resetConfiguration = () => {
    setConfiguration({
      projectType: '',
      timeline: '',
      features: [],
      complexity: '',
      teamSize: ''
    });
    setShowEstimate(false);
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#071428' }}
      data-aos="fade-in"
    >
      <div className="container px-6 mx-auto lg:px-8">
        {/* Section Header */}
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 
            className="mb-6 text-4xl font-bold lg:text-5xl"
            
          >
            Project Configurator
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-300">
            Get an instant estimate for your project by configuring your requirements. 
            Our interactive tool helps you understand pricing based on your specific needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Configuration Form */}
            <div className="space-y-8 lg:col-span-2">
              {/* Project Type */}
              <div 
                className="bg-[#071428] rounded-2xl p-8 border border-slate-700 shadow-lg"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
                  <Icon name="Layers" size={24} className="mr-3 text-blue-400" />
                  Project Type
                </h3>
                <Select
                  options={projectTypes}
                  value={configuration?.projectType}
                  onChange={(value) => setConfiguration(prev => ({ ...prev, projectType: value }))}
                  placeholder="Select your project type"
                  className="mb-4"
                />
              </div>

              {/* Timeline */}
              <div 
                className="bg-[#071428] rounded-2xl p-8 border border-slate-700 shadow-lg"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
                  <Icon name="Clock" size={24} className="mr-3 text-blue-400" />
                  Timeline
                </h3>
                <Select
                  options={timelines}
                  value={configuration?.timeline}
                  onChange={(value) => setConfiguration(prev => ({ ...prev, timeline: value }))}
                  placeholder="Select your preferred timeline"
                  className="mb-4"
                />
              </div>

              {/* Features */}
              <div 
                className="bg-[#071428] rounded-2xl p-8 border border-slate-700 shadow-lg"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
                  <Icon name="Settings" size={24} className="mr-3 text-blue-400" />
                  Features & Add-ons
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {features?.map((feature, index) => (
                    <div 
                      key={feature?.id} 
                      className="flex items-center justify-between p-4 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-600 hover:border-blue-500/50"
                      data-aos="zoom-in"
                      data-aos-delay={500 + (index * 50)}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={configuration?.features?.includes(feature?.id)}
                          onChange={(e) => handleFeatureChange(feature?.id, e?.target?.checked)}
                        />
                        <span className="font-medium text-white">{feature?.label}</span>
                      </div>
                      <span className="font-semibold text-blue-400">+${feature?.price?.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complexity & Team Size */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div 
                  className="bg-[#071428] rounded-2xl p-8 border border-slate-700 shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
                    <Icon name="BarChart3" size={24} className="mr-3 text-blue-400" />
                    Complexity
                  </h3>
                  <Select
                    options={complexityLevels}
                    value={configuration?.complexity}
                    onChange={(value) => setConfiguration(prev => ({ ...prev, complexity: value }))}
                    placeholder="Select complexity level"
                  />
                </div>

                <div 
                  className="bg-[#071428] rounded-2xl p-8 border border-slate-700 shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
                    <Icon name="Users" size={24} className="mr-3 text-blue-400" />
                    Team Size
                  </h3>
                  <Select
                    options={teamSizes}
                    value={configuration?.teamSize}
                    onChange={(value) => setConfiguration(prev => ({ ...prev, teamSize: value }))}
                    placeholder="Select team size"
                  />
                </div>
              </div>
            </div>

            {/* Price Estimate */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div 
                  className="bg-[#071428] rounded-2xl p-8 text-white shadow-2xl border border-slate-700"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  <h3 className="flex items-center mb-6 text-2xl font-bold">
                    <Icon name="Calculator" size={24} className="mr-3 text-blue-400" />
                    Price Estimate
                  </h3>

                  {showEstimate ? (
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="mb-2 text-5xl font-bold text-white">
                          ${estimatedPrice?.toLocaleString()}
                        </div>
                        <div className="text-slate-400">Estimated Project Cost</div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Project Type:</span>
                          <span className="font-semibold text-white">
                            {projectTypes?.find(p => p?.value === configuration?.projectType)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Timeline:</span>
                          <span className="font-semibold text-white">
                            {timelines?.find(t => t?.value === configuration?.timeline)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Features:</span>
                          <span className="font-semibold text-white">{configuration?.features?.length} selected</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Complexity:</span>
                          <span className="font-semibold text-white">
                            {complexityLevels?.find(c => c?.value === configuration?.complexity)?.label}
                          </span>
                        </div>
                      </div>

                      <div className="pt-6 space-y-3 border-t border-slate-600">
                        <Button 
                          variant="default" 
                          fullWidth
                          className="text-white bg-blue-600 border-blue-500 hover:bg-blue-700"
                          iconName="Send"
                          iconPosition="right"
                        >
                          Request Quote
                        </Button>
                        <Button 
                          variant="outline" 
                          fullWidth
                          onClick={resetConfiguration}
                          className="text-white border-slate-600 hover:bg-slate-700"
                          iconName="RotateCcw"
                          iconPosition="left"
                        >
                          Reset Configuration
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <Icon name="Calculator" size={64} className="mx-auto mb-4 text-slate-600" />
                      <p className="text-slate-400">
                        Configure your project requirements to see an estimated price
                      </p>
                    </div>
                  )}
                </div>

                {/* Additional Info */}
                <div 
                  className="mt-6 bg-[#071428] rounded-xl p-6 border border-slate-700"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    What's Included?
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Complete source code
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Documentation & deployment
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      3 months free support
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Performance optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceConfigurator;