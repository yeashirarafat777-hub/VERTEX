import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // disable background scroll on mobile menu open
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

  const moreItems = [{ name: 'Admin Dashboard', href: '/admin-dashboard', icon: 'Settings' }];

  const handleNavClick = (href) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled
            ? 'bg-background/95 lg:backdrop-blur-md border-b border-border shadow-sm' // ✅ blur only on desktop
            : 'bg-transparent'
          }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* === Logo === */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('/homepage')}
                className="flex items-center space-x-2 group"
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

            {/* === Desktop Nav === */}
            <nav className="items-center hidden space-x-1 lg:flex">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center px-4 py-2 space-x-2 text-sm font-medium transition-colors duration-200 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50"
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
              <div className="relative group">
                <button className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50">
                  <Icon name="MoreHorizontal" size={16} />
                  <span>More</span>
                </button>
                <div className="absolute right-0 z-50 w-48 mt-1 transition-transform duration-200 origin-top scale-y-0 border rounded-md shadow-lg top-full bg-popover border-border group-hover:scale-y-100">
                  {moreItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center w-full px-4 py-3 space-x-3 text-sm transition-colors duration-150 text-popover-foreground hover:bg-muted first:rounded-t-md last:rounded-b-md"
                    >
                      <Icon name={item.icon} size={16} />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* === Desktop CTA === */}
            <div className="items-center hidden space-x-4 lg:flex">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick('/contact')}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavClick('/contact')}
                className="bg-primary hover:bg-primary/90"
              >
                Start Project
              </Button>
            </div>

            {/* === Mobile Menu Button === */}
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 transition-colors duration-200 lg:hidden text-muted-foreground hover:text-primary"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* === Mobile Menu === */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out transform origin-top ${
            isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 border-t shadow-lg bg-background border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...moreItems].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center w-full px-4 py-3 space-x-3 text-sm font-medium transition-colors duration-200 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50"
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="pt-4 mt-4 space-y-2 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => handleNavClick('/contact')}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                size="sm"
                fullWidth
                onClick={() => handleNavClick('/contact')}
                className="bg-primary hover:bg-primary/90"
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* === Overlay without blur === */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
