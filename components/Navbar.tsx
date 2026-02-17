import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if it's an anchor link
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Navigate to home then scroll
        navigate('/' + href);
      } else {
        // Already on home, just scroll and update URL
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          navigate(href); // Update URL hash to trigger active state
        }
      }
    } else {
      // Regular route
      navigate(href);
    }
  };

  const isLinkActive = (href: string) => {
    const currentPath = location.pathname;
    const currentHash = location.hash;

    if (href === '/') {
        return currentPath === '/' && !currentHash;
    }
    if (href.startsWith('#')) {
        return currentPath === '/' && currentHash === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-oscorp-secondary text-white p-2 rounded group-hover:bg-oscorp-accent transition-colors duration-300">
            <Cpu size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-oscorp-secondary">
            OSCORP<span className="font-light">TECH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium transition-colors bg-transparent border-none cursor-pointer px-2 py-1 ${
                    isActive ? 'text-oscorp-secondary font-bold' : 'text-gray-600 hover:text-oscorp-accent'
                }`}
              >
                {link.name}
                {isActive && (
                    <motion.div
                        layoutId="navbar-indicator"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-oscorp-accent rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
              </button>
            );
          })}
          <Link to="/contact">
            <Button variant="primary" className="px-5 py-2 text-xs uppercase tracking-wider">
                Enroll Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-oscorp-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-oscorp-neutral p-6 md:hidden shadow-xl flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.href)}
                  className={`text-lg font-medium text-left bg-transparent border-none cursor-pointer ${
                      isActive ? 'text-oscorp-accent font-bold' : 'text-oscorp-secondary'
                  }`}
                >
                  {link.name}
                </button>
            );
          })}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Enroll Now</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};