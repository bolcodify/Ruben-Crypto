import { motion } from 'motion/react';
import { TrendingUp, PieChart, Newspaper, Globe, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Markets', path: '/markets' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-[1024px] mx-auto px-16">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-white">
              RUBEN BROUWER
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === item.path ? "text-white" : "text-[#a1a1aa] hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#a1a1aa] hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050505] border-b border-white/10 px-16 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2 text-lg font-medium transition-colors",
                location.pathname === item.path ? "text-white" : "text-[#a1a1aa] hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
