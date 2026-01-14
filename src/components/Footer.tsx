import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-bark border-t-4 border-saddle">
      <div className="max-w-4xl mx-auto text-center">
        {/* Pixel Art Divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-tan" />
          ))}
          <div className="w-4 h-4 bg-gold" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-tan" />
          ))}
        </div>

        {/* Credits */}
        <div className="font-pixel text-xs text-muted-foreground mb-4">
          CRAFTED WITH ♥ AND PIXELS
        </div>

        {/* Copyright */}
        <div className="font-body text-lg text-tan">
          © {currentYear} The Digital Adventure
        </div>

        {/* Easter Egg */}
        <div className="mt-6 font-pixel text-[10px] text-muted-foreground opacity-50">
          {'>'} GAME OVER {'<'} INSERT COIN TO PLAY AGAIN
        </div>
      </div>
    </footer>
  );
};

export default Footer;
