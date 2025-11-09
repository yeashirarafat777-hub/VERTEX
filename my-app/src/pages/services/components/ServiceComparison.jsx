import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      popular: false,
      color: 'blue',
      features: [
        { name: 'React Web Application', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'Google Analytics', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'User Authentication', included: false },
        { name: 'Payment Integration', included: false },
        { name: 'Admin Dashboard', included: false },
        { name: 'API Integration', included: false },
        { name: 'Real-time Features', included: false },
        { name: 'Advanced Analytics', included: false }
      ],
      deliverables: [
        '5-10 pages/components',
        '2 weeks delivery',
        '1 month support',
        'Basic documentation'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      popular: true,
      color: 'purple',
      features: [
        { name: 'React Web Application', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'Google Analytics', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'User Authentication', included: true },
        { name: 'Payment Integration', included: true },
        { name: 'Admin Dashboard', included: true },
        { name: 'API Integration', included: true },
        { name: 'Real-time Features', included: false },
        { name: 'Advanced Analytics', included: false }
      ],
      deliverables: [
        '15-25 pages/components',
        '6-8 weeks delivery',
        '3 months support',
        'Comprehensive documentation',
        'Training session included'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large-scale applications',
      monthlyPrice: 10000,
      yearlyPrice: 100000,
      popular: false,
      color: 'green',
      features: [
        { name: 'React Web Application', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'Google Analytics', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'User Authentication', included: true },
        { name: 'Payment Integration', included: true },
        { name: 'Admin Dashboard', included: true },
        { name: 'API Integration', included: true },
        { name: 'Real-time Features', included: true },
        { name: 'Advanced Analytics', included: true }
      ],
      deliverables: [
        'Unlimited pages/components',
        '12-16 weeks delivery',
        '6 months support',
        'Full technical documentation',
        'Team training & workshops',
        'Performance monitoring',
        'Priority support'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        border: 'border-blue-500',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        border: 'border-purple-500',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      green: {
        bg: 'from-green-500 to-green-600',
        border: 'border-green-500',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      }
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Service Packages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your project needs. All packages include modern React development, 
            responsive design, and ongoing support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'monthly' ?'bg-slate-900 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'yearly' ?'bg-slate-900 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages?.map((pkg, index) => {
            const colorClasses = getColorClasses(pkg?.color);
            const price = billingCycle === 'monthly' ? pkg?.monthlyPrice : pkg?.yearlyPrice;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg?.popular ? `ring-4 ${colorClasses?.border} ring-opacity-50` : ''
                }`}
              >
                {/* Popular Badge */}
                {pkg?.popular && (
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colorClasses?.bg} text-white px-6 py-2 rounded-b-lg font-semibold text-sm`}>
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg?.name}</h3>
                    <p className="text-slate-600 mb-6">{pkg?.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-slate-900 mb-2">
                        ${price?.toLocaleString()}
                      </div>
                      <div className="text-slate-500">
                        {billingCycle === 'monthly' ? 'per project' : 'per year'}
                      </div>
                    </div>

                    <Button
                      variant="default"
                      fullWidth
                      className={`${colorClasses?.button} text-white font-semibold py-4`}
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-slate-900 text-lg">Features Included:</h4>
                    {pkg?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Icon
                          name={feature?.included ? "Check" : "X"}
                          size={16}
                          color={feature?.included ? "#10B981" : "#EF4444"}
                        />
                        <span className={`text-sm ${feature?.included ? 'text-slate-700' : 'text-slate-400'}`}>
                          {feature?.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="font-semibold text-slate-900 text-lg mb-4">What You Get:</h4>
                    <ul className="space-y-2">
                      {pkg?.deliverables?.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={16} color="#3B82F6" />
                          <span className="text-sm text-slate-600">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-slate-600 mb-6">
              Every project is unique. If none of our packages fit your exact needs, 
              we'd be happy to create a custom solution tailored specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Custom Project
              </Button>
              <Button
                variant="default"
                className="bg-slate-900 hover:bg-slate-800"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;