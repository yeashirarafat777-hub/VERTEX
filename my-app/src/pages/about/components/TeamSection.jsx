import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaCode, FaPalette, FaDatabase, FaServer, FaMobile, FaCloud, FaTimes } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamSection = () => {
  const [active, setActive] = useState(3);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showExpertise, setShowExpertise] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const teamMembers = [
    { 
      id: 1,
      name: "YEASHIR ARAFAT", 
      title: "JUNIOR DEVELOPER", 
      img: "/images/team-1.jpg", 
      facebook: "https://www.facebook.com/profile.php?id=61573770599341", 
      twitter: "#", 
      linkedin: "#",
      role: "Junior Developer",
      specialization: "Frontend Development & UI Implementation",
      experience: "2+ years",
      location: "Dhaka, Bangladesh",
      bio: "Yeashir is passionate about creating beautiful and functional user interfaces with modern React technologies.",
      skills: ["React", "JavaScript", "CSS", "HTML", "Responsive Design"],
      achievements: ["Frontend Specialist", "UI Implementation Expert", "Quick Learner"],
      interests: ["Gaming", "Technology", "Learning New Skills"]
    },
    { 
      id: 2,
      name: "SAYEEM CDI", 
      title: "JUNIOR DESIGNER", 
      img: "/images/team-2.jpg", 
      facebook: "https://www.facebook.com/sd.sayem.2024", 
      twitter: "#", 
      linkedin: "#",
      role: "Junior Designer",
      specialization: "UI/UX Design & Mobile Design",
      experience: "2+ years",
      location: "Dhaka, Bangladesh",
      bio: "Sayeem creates intuitive and visually appealing designs that enhance user experience across all platforms.",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Mobile Design"],
      achievements: ["Design Award Participant", "User Experience Focus", "Creative Thinker"],
      interests: ["Art", "Design Trends", "Photography"]
    },
    { 
      id: 3,
      name: "SHOAIB HASAN", 
      title: "CO FOUNDER", 
      img: "/images/ceo.jpg", 
      facebook: "#", 
      twitter: "#", 
      linkedin: "#",
      role: "Co Founder",
      specialization: "Backend Architecture & Database Design",
      experience: "8+ years",
      location: "Dhaka, Bangladesh",
      bio: "Shoaib provides strategic leadership and technical direction, ensuring all projects meet the highest standards of quality and innovation.",
      skills: ["Node.js", "PostgreSQL", "AWS", "System Architecture", "Team Leadership"],
      achievements: ["Project Management Expert", "Technical Strategy", "Business Development"],
      interests: ["Entrepreneurship", "Technology", "Business Strategy"]
    },
    { 
      id: 4,
      name: "TAIM HASAN", 
      title: "SENIOR DEVELOPER", 
      img: "/images/team-3.jpg", 
      facebook: "https://www.facebook.com/taim.hasan.400124", 
      twitter: "#", 
      linkedin: "#",
      role: "Senior Developer",
      specialization: "Project Management & Team Coordination",
      experience: "5+ years",
      location: "Dhaka, Bangladesh",
      bio: "Taim excels at managing complex projects and coordinating teams to deliver exceptional results on time and within budget.",
      skills: ["React", "Project Management", "Agile Methodology", "Team Leadership", "Client Communication"],
      achievements: ["Project Delivery Expert", "Team Coordination", "Client Satisfaction"],
      interests: ["Leadership", "Technology", "Team Building"]
    },
    { 
      id: 5,
      name: "SHANTO", 
      title: "SENIOR DEVELOPER", 
      img: "/images/team-5.jpg", 
      facebook: "https://www.facebook.com/naimur.hossain.shanto?comment_id=Y29tbWVudDoxNjU2MTMzNzU1MjA4MDQ2XzE1MjI4Njg1Njg3MDI3NjA%3D", 
      twitter: "#", 
      linkedin: "#",
      role: "Senior Developer",
      specialization: "Full Stack Development & System Architecture",
      experience: "6+ years",
      location: "Dhaka, Bangladesh",
      bio: "Shanto is a versatile full-stack developer with expertise in building scalable applications and robust system architectures.",
      skills: ["React", "Node.js", "MongoDB", "DevOps", "System Design"],
      achievements: ["Full Stack Specialist", "System Architecture", "Performance Optimization"],
      interests: ["Technology", "Problem Solving", "Innovation"]
    }
  ];

  const expertAreas = {
    "YEASHIR ARAFAT": [
      { icon: <FaCode className="text-blue-400" />, skill: "Frontend Development", level: "Expert" },
      { icon: <FaMobile className="text-green-400" />, skill: "Responsive Design", level: "Expert" },
      { icon: <FaPalette className="text-purple-400" />, skill: "UI Implementation", level: "Advanced" }
    ],
    "SAYEEM CDI": [
      { icon: <FaPalette className="text-pink-400" />, skill: "UI/UX Design", level: "Expert" },
      { icon: <FaMobile className="text-indigo-400" />, skill: "Mobile Design", level: "Advanced" },
      { icon: <FaCode className="text-yellow-400" />, skill: "Design Systems", level: "Intermediate" }
    ],
    "SHOAIB HASAN": [
      { icon: <FaServer className="text-red-400" />, skill: "Backend Architecture", level: "Expert" },
      { icon: <FaDatabase className="text-orange-400" />, skill: "Database Design", level: "Expert" },
      { icon: <FaCloud className="text-cyan-400" />, skill: "Cloud Infrastructure", level: "Expert" }
    ],
    "TAIM HASAN": [
      { icon: <FaServer className="text-green-400" />, skill: "Project Management", level: "Expert" },
      { icon: <FaCode className="text-blue-400" />, skill: "Agile Methodology", level: "Advanced" },
      { icon: <FaCloud className="text-purple-400" />, skill: "Team Coordination", level: "Expert" }
    ],
    "SHANTO": [
      { icon: <FaCode className="text-yellow-400" />, skill: "Full Stack Development", level: "Expert" },
      { icon: <FaDatabase className="text-red-400" />, skill: "System Architecture", level: "Expert" },
      { icon: <FaServer className="text-indigo-400" />, skill: "DevOps & Deployment", level: "Advanced" }
    ]
  };

  const handleLearnMore = (memberName, event) => {
    event.stopPropagation();
    setSelectedMember(memberName);
    setShowExpertise(true);
  };

  const closeExpertise = () => {
    setShowExpertise(false);
    setSelectedMember(null);
  };

  return (
    <section className="relative py-20 text-center" style={{ backgroundColor: '#071428' }}>
      <style jsx>{`
        @keyframes overlaySlide {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 0.7; }
        }
        .overlay-animate {
          animation: overlaySlide 0.7s ease forwards;
        }

        @keyframes itemSlide {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .item-animate {
          animation: itemSlide 0.7s ease forwards;
        }

        .overlay-bg {
          background-color: #75ABAF;
          opacity: 0.5;
        }

        @keyframes expertiseSlideIn {
          from { 
            transform: translateX(100%) scale(0.95);
            opacity: 0;
          }
          to { 
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .expertise-slide-in {
          animation: expertiseSlideIn 0.5s ease-out forwards;
        }

        .expertise-content {
          max-height: none;
          overflow: visible;
        }

        .skill-item {
          min-height: 80px;
          display: flex;
          align-items: center;
        }
      `}</style>

      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-blue uppercase tracking-[0.15em]">
            Expert People
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300">
            We are committed to providing our customers with exceptional service while offering our employees the best training.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-5" data-aos="fade-up" data-aos-delay="200">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="relative overflow-hidden cursor-pointer group"
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(3)}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  className={`w-full h-full object-cover grayscale transition duration-700 ${
                    active === idx ? "grayscale-0 scale-105" : "grayscale"
                  }`}
                />

                {/* Social Media Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center overlay-bg transition-all duration-700 ${
                    active === idx && !showExpertise ? "overlay-animate opacity-70" : "opacity-0 translate-x-full"
                  }`}
                >
                  <div
                    className={`flex flex-col items-center ${
                      active === idx && !showExpertise ? "item-animate" : "opacity-0"
                    }`}
                  >
                    <ul className="mb-5 space-y-2 text-sm font-semibold text-white">
                      <li>
                        <a href={member.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-black">
                          <FaFacebookF /> FACEBOOK
                        </a>
                      </li>
                      <li>
                        <a href={member.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-black">
                          <FaTwitter /> TWITTER
                        </a>
                      </li>
                      <li>
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-black">
                          <FaLinkedinIn /> LINKEDIN
                        </a>
                      </li>
                    </ul>
                    <button 
                      onClick={(e) => handleLearnMore(member.name, e)}
                      className="bg-black text-white px-6 py-2 uppercase text-[11px] tracking-widest font-extrabold border-2 border-black hover:bg-white hover:text-black transition"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className={`text-[15px] font-extrabold tracking-widest ${
                  member.name === "SHOAIB HASAN" ? "text-red-600" : "text-white"
                }`}>
                  {member.name}
                </h3>
                <p className="text-[11px] text-gray-400 tracking-[0.2em] mt-1 uppercase">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
       

        {/* Expertise Modal */}
        {showExpertise && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-end p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeExpertise}
            ></div>
            
            {/* Expertise Panel */}
            <div className="relative bg-[#071428] border-l border-slate-700 rounded-l-2xl p-6 w-full max-w-md h-[90vh] overflow-y-auto expertise-slide-in shadow-2xl">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedMember}'s Expertise
                </h3>
                <button
                  onClick={closeExpertise}
                  className="p-2 text-xl font-bold transition rounded-full text-slate-300 hover:text-white hover:bg-slate-700"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="space-y-4 expertise-content">
                {expertAreas[selectedMember]?.map((area, index) => (
                  <div
                    key={index}
                    className="p-4 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-600 hover:border-slate-500 skill-item"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 text-2xl">
                        {area.icon}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h4 className="mb-2 text-lg font-semibold text-white break-words">
                          {area.skill}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-300 whitespace-nowrap">Proficiency Level:</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap ${
                            area.level === 'Expert' 
                              ? 'bg-green-500/30 text-green-300 border border-green-500/50' 
                              : area.level === 'Advanced'
                              ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                              : 'bg-yellow-500/30 text-yellow-300 border border-yellow-500/50'
                          }`}>
                            {area.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-8 border-t border-slate-600">
                <p className="text-base leading-relaxed text-slate-300">
                  {selectedMember} brings exceptional skills and dedication to every project, 
                  ensuring top-quality results and innovative solutions tailored to client needs. 
                  With expertise in multiple domains, they deliver comprehensive solutions that 
                  drive business success and technological excellence.
                </p>
              </div>

              <button
                onClick={closeExpertise}
                className="w-full px-8 py-3 mt-6 font-bold text-white transition duration-300 bg-blue-600 border border-blue-500 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`w-2 h-2 border border-white transition-all duration-300 ${active === i ? "bg-white" : "bg-transparent"}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;