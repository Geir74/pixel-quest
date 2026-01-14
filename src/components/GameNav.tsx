import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Start', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Quests', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const GameNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (index: number, href: string) => {
    setActiveItem(index);
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bark/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-pixel text-xs text-gold">
            <span className="text-primary">{'>'}</span> ADVENTURE.EXE
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(index, item.href)}
                  className={`
                    font-pixel text-xs px-4 py-2 transition-all duration-100
                    ${activeItem === index 
                      ? 'bg-primary text-primary-foreground pixel-border-sm' 
                      : 'text-tan hover:text-gold hover:bg-mossy'
                    }
                  `}
                >
                  {activeItem === index && <span className="mr-1">{'>'}</span>}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden font-pixel text-xs text-tan hover:text-gold p-2"
          >
            {mobileOpen ? '[X]' : '[=]'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden dialogue-box mb-4">
            <ul className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleClick(index, item.href)}
                    className={`
                      w-full text-left font-pixel text-xs px-4 py-3 transition-all
                      ${activeItem === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-tan hover:text-gold hover:bg-mossy'
                      }
                    `}
                  >
                    {activeItem === index && <span className="mr-2">{'>'}</span>}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GameNav;
