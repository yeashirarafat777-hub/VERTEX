import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechnologyStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const technologies = [
    {
      category: 'Frontend Frameworks',
      description: 'Modern JavaScript frameworks for building interactive user interfaces',
      tools: [
        {
          name: 'React 18',
          description: 'Latest React with concurrent features and improved performance',
          icon: 'Code',
          proficiency: 95,
          color: 'blue'
        },
        {
          name: 'Next.js',
          description: 'Full-stack React framework with SSR and static generation',
          icon: 'Layers',
          proficiency: 90,
          color: 'slate'
        },
        {
          name: 'Vite',
          description: 'Lightning-fast build tool with hot module replacement',
          icon: 'Zap',
          proficiency: 88,
          color: 'yellow'
        },
        {
          name: 'TypeScript',
          description: 'Strongly typed JavaScript for better code quality',
          icon: 'FileCode',
          proficiency: 85,
          color: 'blue'
        }
      ]
    },
    {
      category: 'Styling & Design',
      description: 'Modern CSS frameworks and design systems for beautiful interfaces',
      tools: [
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid UI development',
          icon: 'Palette',
          proficiency: 95,
          color: 'cyan'
        },
        {
          name: 'Framer Motion',
          description: 'Production-ready motion library for React applications',
          icon: 'Play',
          proficiency: 80,
          color: 'purple'
        },
        {
          name: 'Styled Components',
          description: 'CSS-in-JS library for component-scoped styling',
          icon: 'Brush',
          proficiency: 75,
          color: 'pink'
        },
        {
          name: 'Material-UI',
          description: 'React components for faster and easier web development',
          icon: 'Box',
          proficiency: 85,
          color: 'blue'
        }
      ]
    },
    {
      category: 'Backend & Database',
      description: 'Robust backend solutions and database management systems',
      tools: [
        {
          name: 'Node.js',
          description: 'JavaScript runtime for building scalable server applications',
          icon: 'Server',
          proficiency: 85,
          color: 'green'
        },
        {
          name: 'Express.js',
          description: 'Fast and minimalist web framework for Node.js',
          icon: 'Globe',
          proficiency: 88,
          color: 'gray'
        },
        {
          name: 'MongoDB',
          description: 'NoSQL database for flexible and scalable data storage',
          icon: 'Database',
          proficiency: 80,
          color: 'green'
        },
        {
          name: 'PostgreSQL',
          description: 'Advanced relational database with powerful features',
          icon: 'HardDrive',
          proficiency: 75,
          color: 'blue'
        }
      ]
    },
    {
      category: 'Development Tools',
      description: 'Essential tools for modern development workflow and deployment',
      tools: [
        {
          name: 'Git & GitHub',
          description: 'Version control and collaborative development platform',
          icon: 'GitBranch',
          proficiency: 90,
          color: 'orange'
        },
        {
          name: 'Docker',
          description: 'Containerization platform for consistent deployments',
          icon: 'Package',
          proficiency: 70,
          color: 'blue'
        },
        {
          name: 'AWS',
          description: 'Cloud computing services for scalable infrastructure',
          icon: 'Cloud',
          proficiency: 75,
          color: 'orange'
        },
        {
          name: 'Vercel',
          description: 'Frontend deployment platform with global CDN',
          icon: 'Upload',
          proficiency: 85,
          color: 'black'
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      slate: 'from-slate-500 to-slate-600',
      yellow: 'from-yellow-500 to-yellow-600',
      cyan: 'from-cyan-500 to-cyan-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      green: 'from-green-500 to-green-600',
      gray: 'from-gray-500 to-gray-600',
      orange: 'from-orange-500 to-orange-600',
      black: 'from-gray-800 to-gray-900'
    };
    return colors?.[color] || colors?.blue;
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
            className="mb-6 text-4xl font-bold text-blue lg:text-5xl"
            style={{ 
              fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
            }}
          >
            Our Technology Stack
          </h2>
        </div>

        {/* Technology Categories */}
        <div className="space-y-16">
          {technologies?.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="p-8 rounded-3xl lg:p-12 bg-[#071428] border border-slate-700"
              data-aos="fade-up"
              data-aos-delay={200 + (categoryIndex * 100)}
            >
              {/* Category Header */}
              <div className="mb-12 text-center">
                <h3 
                  className="mb-4 text-3xl font-bold text-white"
                  style={{ 
                    fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
                  }}
                >
                  {category?.category}
                </h3>
                <p className="max-w-2xl mx-auto text-lg text-slate-300">
                  {category?.description}
                </p>
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category?.tools?.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex}
                    className="p-6 transition-all duration-300 bg-[#071428] shadow-lg rounded-2xl hover:shadow-xl group hover:-translate-y-2 border border-slate-700 cursor-pointer relative overflow-hidden glass-hover"
                    data-aos="zoom-in"
                    data-aos-delay={300 + (toolIndex * 100)}
                  >
                    {/* Glass Hover Effect */}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-white/5 to-transparent group-hover:opacity-100 rounded-2xl"></div>
                    
                    {/* Tool Icon with 360° Rotation */}
                    <div 
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${getColorClasses(tool?.color)} rounded-xl mb-4 group-hover:scale-110 transition-all duration-300 relative z-10 icon-container`}
                      onMouseEnter={(e) => {
                        e.currentTarget.classList.add('rotate-360');
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.classList.remove('rotate-360');
                      }}
                    >
                      <Icon name={tool?.icon} size={28} color="white" className="transition-transform duration-300" />
                    </div>

                    {/* Tool Name */}
                    <h4 className="relative z-10 mb-3 text-xl font-bold text-white">
                      {tool?.name}
                    </h4>

                    {/* Tool Description */}
                    <p className="relative z-10 mb-4 text-sm leading-relaxed text-slate-300">
                      {tool?.description}
                    </p>

                    {/* Proficiency Bar */}
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-400">Proficiency</span>
                        <span className="text-sm font-bold text-white">{tool?.proficiency}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-700">
                        <div 
                          className={`h-2 bg-gradient-to-r ${getColorClasses(tool?.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tool?.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div 
            className="p-12 text-white border rounded-3xl border-slate-700"
            style={{ backgroundColor: '#071428' }}
          >
            <h3 
              className="mb-4 text-3xl font-bold"
              style={{ 
                fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
              }}
            >
              Ready to Build Something Amazing?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-slate-300">
              Let's discuss how our technology expertise can bring your project to life. 
              Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button 
                className="flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-colors duration-300 border  bg-[#071428] rounded-xl "
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <Icon name="Calendar" size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button 
                className="flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-colors duration-300 border-2 border-slate-600 rounded-xl hover:bg-slate-700 hover:border-slate-500"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start Discussion</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Hover and Rotation CSS */}
      <style jsx>{`
        .glass-hover {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .glass-hover:hover {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .icon-container {
          transition: transform 0.6s ease-in-out;
        }
        .rotate-360 {
          transform: rotateY(360deg);
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologyStack;