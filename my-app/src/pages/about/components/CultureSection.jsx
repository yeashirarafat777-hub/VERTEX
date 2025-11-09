import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Public folder থেকে images import - relative pat                  
const collaborativeImg = '/images/08.gif';
const learningImg = '/images/09.gif';
const balanceImg = '/images/10.gif';


const CultureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const cultureValues = [
    {
      title: "Collaborative Innovation",
      description: "We believe the best solutions emerge when diverse minds work together, sharing ideas and building upon each other's strengths.",
      image: collaborativeImg,
      imageAlt: "Team of diverse professionals collaborating around a conference table with laptops and documents",
      icon: "Users",
      examples: [
        "Daily stand-ups and collaborative planning sessions",
        "Cross-functional team projects and knowledge sharing",
        "Open-door policy for ideas and feedback"
      ]
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so do we. We invest in our team's growth through continuous education and skill development.",
      image: learningImg,
      imageAlt: "Professional development session with team members learning new technologies on laptops",
      icon: "BookOpen",
      examples: [
        "Monthly tech talks and learning sessions",
        "Conference attendance and certification support",
        "Internal mentorship and skill-sharing programs"
      ]
    },
    {
      title: "Work-Life Balance",
      description: "We understand that great work comes from well-rested, fulfilled individuals. We prioritize flexibility and personal well-being.",
      image: balanceImg,
      imageAlt: "Modern office space with comfortable seating areas and natural lighting for relaxation",
      icon: "Heart",
      examples: [
        "Flexible working hours and remote work options",
        "Wellness programs and mental health support",
        "Team building activities and social events"
      ]
    }
  ];

  const officePhotos = [
   
  ];

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#071428' }}
      data-aos="fade-in"
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
            More Than Just Code,  We're Family
            
          </h2>
          
          <p 
            className="max-w-3xl mx-auto text-xl leading-relaxed text-blue"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our culture is built on trust, innovation, and mutual respect.
          </p>
        </div>

        {/* Culture Values */}
        <div className="mb-20 space-y-20">
          {cultureValues?.map((value, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={300 + (index * 100)}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div 
                  className="flex items-center space-x-4"
                  data-aos="zoom-in"
                  data-aos-delay={400 + (index * 100)}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-xl">
                    <Icon name={value?.icon} size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{value?.title}</h3>
                </div>
                
                <p 
                  className="text-lg leading-relaxed text-slate-300"
                  data-aos="fade-up"
                  data-aos-delay={500 + (index * 100)}
                >
                  {value?.description}
                </p>
                
                <div 
                  className="space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={600 + (index * 100)}
                >
                  <h4 className="font-semibold text-white">How we live this value:</h4>
                  {value?.examples?.map((example, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start space-x-3"
                      data-aos="fade-up"
                      data-aos-delay={700 + (idx * 50)}
                    >
                     
                    </div>
                  ))}
                </div>
              </div>
              
              <div 
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                data-aos="zoom-in"
                data-aos-delay={800 + (index * 100)}
              >
                <div className="relative overflow-hidden group cursor-zoom-in">
                  <Image
                    src={value?.image}
                    alt={value?.imageAlt}
                    className="object-cover w-full transition-all duration-500 shadow-lg h-80 rounded-2xl group-hover:shadow-xl group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:opacity-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
       
      </div>
    </section>
  );
};

export default CultureSection;