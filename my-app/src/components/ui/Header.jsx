import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLiveDotVisible, setIsLiveDotVisible] = useState(true);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blinking dot effect with custom color
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLiveDotVisible(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: 'Home', href: '/homepage', icon: 'Home' },
    { name: 'Portfolio', href: '/portfolio', icon: 'Briefcase' },
    { name: 'Services', href: '/services', icon: 'Code' },
    { name: 'About', href: '/about', icon: 'Users' },
    { name: 'Contact', href: '/contact', icon: 'Mail' }
  ];

  const toggleMenuItems = [
    { name: 'Live Project', href: '/theam', icon: 'Globe', isLive: true },
    { name: 'Admin Dashboard', href: '/admin-dashboard', icon: 'Settings' }
  ];

  const handleNavClick = (href) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
    setIsToggleMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      // Refresh AOS when mobile menu opens to ensure animations trigger
      setTimeout(() => AOS.refresh(), 300);
    }
  };

  const toggleAdminMenu = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled
            ? 'bg-background/95 lg:backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
          }`}
        data-aos="fade-down"
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('/homepage')}
                className="flex items-center space-x-2 group"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-8 h-8 transition-transform duration-300 transform rounded-lg bg-gradient-to-br from-primary to-accent group-hover:scale-110">
                    <Icon name="Code2" size={18} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute transition-opacity duration-300 rounded-lg opacity-0 -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 blur group-hover:opacity-100"></div>
                </div>
                <span className="font-sans text-xl font-bold tracking-tight text-primary">
                  VERTEX
                </span>
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="items-center hidden space-x-1 lg:flex">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center px-4 py-2 space-x-2 text-sm font-medium transition-all duration-200 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 hover:scale-105"
                  data-aos="fade-down"
                  data-aos-delay={100 + (index * 50)}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
              
              {/* Toggle Menu for Live Project & Admin Dashboard */}
              <div className="relative group">
                <button 
                  onClick={toggleAdminMenu}
                  className="flex items-center px-4 py-2 space-x-2 text-sm font-medium transition-all duration-200 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 hover:scale-105"
                  data-aos="fade-down"
                  data-aos-delay="350"
                >
                  <Icon name="MoreHorizontal" size={16} />
                  <span>More</span>
                  <Icon 
                    name={isToggleMenuOpen ? "ChevronUp" : "ChevronDown"} 
                    size={14} 
                    className="transition-transform duration-200"
                  />
                </button>
                
                {/* Toggle Menu Dropdown */}
                <div 
                  className={`absolute right-0 z-50 w-56 mt-1 transition-all duration-300 border rounded-lg shadow-xl bg-popover border-border overflow-hidden
                    ${isToggleMenuOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                >
                  {toggleMenuItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center w-full px-4 py-3 space-x-3 text-sm transition-all duration-200 text-popover-foreground hover:bg-muted/80 hover:pl-6
                        ${index === 0 ? 'rounded-t-lg' : ''}
                        ${index === toggleMenuItems.length - 1 ? 'rounded-b-lg' : 'border-b border-border'}
                      `}
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                    >
                      <Icon name={item.icon} size={16} />
                      <span className="flex-1 text-left">{item.name}</span>
                      {item.isLive && (
                        <div className="relative">
                          <div 
                            className={`w-2 h-2 rounded-full ${
                              isLiveDotVisible ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300`}
                            style={{ backgroundColor: '#071428' }}
                          />
                          <div 
                            className="absolute inset-0 rounded-full animate-ping" 
                            style={{ backgroundColor: '#071428', opacity: 0.4 }}
                          />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 transition-all duration-300 lg:hidden text-muted-foreground hover:text-primary hover:scale-110"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden
            ${isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
            }`}
        >
          <div 
            className="px-6 py-4 border-t shadow-xl bg-background border-border"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <nav className="space-y-3">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center w-full px-4 py-3 space-x-3 text-sm font-medium transition-all duration-300 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 hover:pl-6"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
              
              {/* Toggle Menu Items in Mobile */}
              {toggleMenuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center w-full px-4 py-3 space-x-3 text-sm font-medium transition-all duration-300 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 hover:pl-6"
                  data-aos="fade-right"
                  data-aos-delay={(navigationItems.length + index) * 100}
                  data-aos-duration="500"
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                  {item.isLive && (
                    <div className="relative ml-auto">
                      <div 
                        className={`w-2 h-2 rounded-full ${
                          isLiveDotVisible ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-300`}
                        style={{ backgroundColor: '#071428' }}
                      />
                      <div 
                        className="absolute inset-0 rounded-full animate-ping" 
                        style={{ backgroundColor: '#071428', opacity: 0.4 }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          data-aos="fade-in"
          data-aos-duration="300"
        />
      )}
    </>
  );
};

export default Header;