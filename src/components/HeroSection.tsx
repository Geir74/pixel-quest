import React, { useState, useEffect } from 'react';

export const HeroSection: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden scanlines"
    >
      {/* Pixel Art Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--forest-green)) 1px, transparent 1px),
              linear-gradient(hsl(var(--forest-green)) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Decorative pixels */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary animate-pulse delay-100" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-tan animate-pulse delay-200" />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-olive animate-pulse delay-300" />

      <div className="relative z-10 text-center px-4">
        {/* Title Frame */}
        <div className="dialogue-box p-8 md:p-12 mb-8">
          <div className="text-gold font-pixel text-xs mb-4 tracking-widest">
            {'<<'} WELCOME TO {'>>'}
          </div>
          
          <h1 className="font-pixel text-2xl md:text-4xl text-parchment mb-6 text-shadow-dark leading-relaxed">
            THE DIGITAL
            <br />
            <span className="text-gold pulse-glow">ADVENTURE</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-tan max-w-xl mx-auto leading-relaxed">
            An explorer's portfolio of quests, skills, and discoveries 
            in the realm of code and craft
          </p>
        </div>

        {/* Press Start Button */}
        <button
          onClick={handleStart}
          disabled={started}
          className={`
            retro-btn-gold px-8 py-4 text-sm md:text-base
            ${started ? 'opacity-50' : 'animate-pixel-bounce'}
          `}
        >
          {started ? 'LOADING...' : '>>> PRESS START <<<'}
        </button>

        {/* Blinking instruction */}
        <div className="mt-8 font-pixel text-xs text-muted-foreground">
          <span>INSERT COIN TO CONTINUE</span>
          <span className={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-pixel text-xs text-muted-foreground">
        <div className="animate-bounce">
          <span className="block text-center">▼</span>
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
