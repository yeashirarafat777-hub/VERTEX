import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Change this to true
      mirror: false, // Change this to false
    });
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Excellence",
      icon: "Monitor",
      color: "blue",
      skills: [
        { name: "React", level: 98, projects: 180, icon: "Code2" },
        { name: "TypeScript", level: 95, projects: 150, icon: "FileCode" },
        { name: "Next.js", level: 92, projects: 120, icon: "Zap" },
        { name: "Tailwind CSS", level: 96, projects: 200, icon: "Palette" },
        { name: "Vite", level: 90, projects: 100, icon: "Lightning" },
        { name: "Redux Toolkit", level: 88, projects: 80, icon: "Database" }
      ]
    },
    backend: {
      title: "Backend Mastery",
      icon: "Server",
      color: "green",
      skills: [
        { name: "Node.js", level: 94, projects: 140, icon: "Cpu" },
        { name: "Express.js", level: 92, projects: 130, icon: "Globe" },
        { name: "PostgreSQL", level: 89, projects: 90, icon: "Database" },
        { name: "MongoDB", level: 85, projects: 70, icon: "HardDrive" },
        { name: "GraphQL", level: 87, projects: 60, icon: "Share2" },
        { name: "REST APIs", level: 95, projects: 160, icon: "Link" }
      ]
    },
    devops: {
      title: "DevOps & Cloud",
      icon: "Cloud",
      color: "orange",
      skills: [
        { name: "AWS", level: 91, projects: 110, icon: "CloudLightning" },
        { name: "Docker", level: 88, projects: 95, icon: "Package" },
        { name: "Kubernetes", level: 82, projects: 45, icon: "Layers" },
        { name: "CI/CD", level: 93, projects: 120, icon: "GitBranch" },
        { name: "Terraform", level: 79, projects: 35, icon: "Settings" },
        { name: "Monitoring", level: 86, projects: 80, icon: "Activity" }
      ]
    },
    design: {
      title: "Design & UX",
      icon: "Paintbrush",
      color: "purple",
      skills: [
        { name: "Figma", level: 94, projects: 150, icon: "Figma" },
        { name: "Design Systems", level: 92, projects: 85, icon: "Grid3x3" },
        { name: "User Research", level: 87, projects: 70, icon: "Users" },
        { name: "Prototyping", level: 90, projects: 100, icon: "Smartphone" },
        { name: "Accessibility", level: 89, projects: 120, icon: "Eye" },
        { name: "Animation", level: 85, projects: 60, icon: "Play" }
      ]
    }
  };

  const certifications = [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024", icon: "Award" },
    { name: "React Developer Certification", issuer: "Meta", year: "2023", icon: "Code2" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2024", icon: "Cloud" },
    { name: "Kubernetes Administrator", issuer: "CNCF", year: "2023", icon: "Settings" },
    { name: "UX Design Professional", issuer: "Google", year: "2024", icon: "Paintbrush" },
    { name: "Accessibility Specialist", issuer: "IAAP", year: "2023", icon: "Eye" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        light: 'bg-blue-500/10',
        border: 'border-blue-500'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        light: 'bg-green-500/10',
        border: 'border-green-500'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        light: 'bg-orange-500/10',
        border: 'border-orange-500'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        light: 'bg-purple-500/10',
        border: 'border-purple-500'
      }
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#071428' }}
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
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
            Skills That Drive
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Innovation
            </span>
          </h2>
          
          <p 
            className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our team's collective expertise spans the entire technology stack, ensuring we can tackle any challenge and deliver exceptional results across all aspects of web development.
          </p>
        </div>

        {/* Category Tabs - Remove AOS from buttons */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories)?.map(([key, category], index) => {
            const colorClasses = getColorClasses(category?.color);
            const isActive = activeCategory === key;
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-300 
                  relative overflow-hidden
                  ${isActive
                    ? `${colorClasses?.bg} text-white shadow-lg transform scale-105`
                    : 'bg-[#0a1a32] border border-slate-600 text-slate-300 hover:bg-[#071428] hover:text-white hover:border-blue-400'
                  }
                  before:content-[''] before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:border-t before:border-l before:border-inherit
                  after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-3 after:h-3 after:border-b after:border-r after:border-inherit
                `}
              >
                <Icon name={category?.icon} size={20} className={isActive ? "text-white" : "text-current"} />
                <span>{category?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div 
          className="p-8 mb-16 border bg-[#071428] border-slate-700 rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => {
              const colorClasses = getColorClasses(skillCategories?.[activeCategory]?.color);
              
              return (
                <div 
                  key={index} 
                  className="group"
                  data-aos="zoom-in"
                  data-aos-delay={600 + (index * 100)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${colorClasses?.light} rounded-lg flex items-center justify-center`}>
                        <Icon name={skill?.icon} size={18} className={colorClasses?.text} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{skill?.name}</h4>
                        <p className="text-xs text-slate-400">{skill?.projects} projects</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-white">{skill?.level}%</span>
                  </div>
                  
                  <div className="w-full h-2 overflow-hidden rounded-full bg-slate-700">
                    <div 
                      className={`h-full ${colorClasses?.bg} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill?.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div 
          className="p-8 border bg-gradient-to-r from-slate-800/50 to-blue-500/10 rounded-2xl border-slate-700"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="mb-8 text-center">
            <h3 
              className="mb-4 text-2xl font-bold text-white"
              style={{ 
                fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
              }}
            >
              Professional Certifications
            </h3>
            <p className="text-slate-300">Industry-recognized credentials that validate our expertise</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications?.map((cert, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-300 border bg-[#071428] border-slate-700 rounded-xl hover:shadow-lg hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={800 + (index * 100)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10">
                    <Icon name={cert?.icon} size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-white">{cert?.name}</h4>
                    <p className="mb-2 text-sm text-slate-400">{cert?.issuer}</p>
                    <span className="inline-block px-2 py-1 text-xs text-green-300 border rounded-full bg-green-500/20 border-green-500/30">
                      {cert?.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Expertise Summary */}
        <div 
          className="mt-16 p-8 bg-[#071428] border border-slate-700 rounded-2xl text-center"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <h3 
            className="mb-4 text-2xl font-bold text-blue"
            style={{ 
              fontFamily: "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif"
            }}
          >
            Comprehensive Technology Stack
          </h3>
          <p className="max-w-2xl mx-auto text-slate-300">
            From frontend interfaces to backend systems and cloud infrastructure, our team possesses the full spectrum of skills needed to build, deploy, and maintain world-class web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;