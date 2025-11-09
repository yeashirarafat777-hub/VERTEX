import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  const services = [
    { icon: '/images/icon1.PNG', title: 'Website Development' },
    { icon: '/images/icon2.PNG', title: 'Graphic Designing' },
    { icon: '/images/icon3.PNG', title: 'Digital Marketing' },
    { icon: '/images/icon4.PNG', title: 'SEO And Content Writing' },
    { icon: '/images/icon5.PNG', title: 'App Development' },
  ];

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false, // false korlam jate bar bar animate kore
      mirror: true, // scroll korar somoy abar animate hobe
      offset: 100, // trigger point offset
      easing: 'ease-in-out' // smooth easing
    });
  }, []);

  return (
    <section
      id="services"
      className="relative py-20 bg-center bg-cover"
      style={{ backgroundImage: "url('/features/images/section-bg.jpg')" }}
    >
      {/* Section Header */}
      <div className="container mx-auto mb-16 text-center">
        <h2 
          data-aos="fade-down"
          data-aos-delay="100"
          className="mb-6 text-4xl font-normal text-blue- md:text-5xl"
        >
          OUR MAIN SERVICES <br /> 
        </h2>
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg font-normal  text-[#071428]"
        >
          We are committed to our customers with Best service
          <br />
          while offering our employees the best training
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 px-4 md:px-8 justify-items-center md:flex md:flex-nowrap md:justify-evenly md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // Staggered delay
              data-aos-once="false" // Bar bar animate hobe
              className={`card relative w-44 md:w-56 h-64 ${
                index === 4 ? 'col-span-2 mx-auto' : ''
              }`}
            >
              {/* Front Face */}
              <div className="face front flex flex-col items-center justify-center p-4 bg-[#394353] text-center rounded-lg">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-contain w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-normal text-gray-300 uppercase">
                  {service.title}
                </h3>
              </div>

              {/* Back Face */}
              <div className="face back flex flex-col items-center justify-center p-4 bg-[#46B087] text-white rounded-lg">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-contain w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-normal text-white uppercase">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for Flip Cards */}
      <style>{`
        .card {
          perspective: 1000px;
          position: relative;
        }
        .card .face {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          backface-visibility: hidden;
          border-radius: 1rem;
          transition: transform 0.6s ease-out;
        }
        .card .front {
          transform: rotateY(0deg);
          z-index: 2;
        }
        .card .back {
          transform: rotateY(180deg);
        }
        .card:hover .front {
          transform: rotateY(180deg);
        }
        .card:hover .back {
          transform: rotateY(360deg);
        }
      `}</style>
    </section>
  );
};

export default Features;