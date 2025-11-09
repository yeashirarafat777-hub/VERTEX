import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Cafe Shop Demo",
    image: "/images/demo-1.png",
    link: "https://template06-ii5p.vercel.app/",
  },
  {
    title: "Restaurant Demo",
    image: "/images/demo-2.png",
    link: "https://resturenttwo.vercel.app/",
  },
  {
    title: "Restaurant Demo",
    image: "/images/demo-3.png",
    link: "https://template05-mu.vercel.app/",
  },
  {
    title: "Restaurant Demo",
    image: "/images/demo-4.png",
    link: "https://project2-weld-chi.vercel.app/",
  },
  {
    title: "Restaurant Demo",
    image: "/images/dem0-5.png",
    link: "https://project2-x5ae.vercel.app/",
  },
  {
    title: "Restaurant Demo",
    image: "/images/demo-6.png",
    link: "https://resturentthree.vercel.app/",
  },
];

const LiveProject = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Back Button - Fixed at top without border and shadow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed z-50 top-6 left-6"
      >
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back
        </button>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="px-4 py-16 sm:px-6"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-[#2DE3A0] ">
          Explore Our <span className="text-white">Some Amazing Demo Projects</span>
        </h2>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-2xl transition-transform duration-300 group"
            >
              <div className="relative w-full max-w-[30rem] pb-[60%] bg-black rounded-t-xl overflow-hidden border-[10px] border-gray-900 shadow-2xl">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gray-900 rounded-full z-10"></div>
                <a
                  href={project.link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full bg-black cursor-pointer"
                  />
                </a>
              </div>

              <div className="w-full max-w-[34rem] h-6 bg-gray-900 rounded-b-xl shadow-inner mt-[-2px]"></div>

              <div className="flex flex-col items-center gap-4 mt-4 text-center sm:flex-row sm:text-left">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <a
                  href={project.link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2DE3A0] hover:text-[#1bc98e] font-medium transition whitespace-nowrap"
                >
                  🔗 Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto mt-20 text-lg text-center md:text-xl text-white/90">
          Looking for a <span className="text-[#2DE3A0] font-bold">custom website</span> to take your business to the next level? 
          <br />
          Don't wait! <a href="/contact" className="text-[#2DE3A0] underline font-semibold hover:text-[#1bc98e]">Contact us</a> now and let's build something amazing together.
        </p>
      </motion.section>
    </div>
  );
};

export default LiveProject;