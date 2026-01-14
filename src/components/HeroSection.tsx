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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden scanlines bg-night-sky"
    >
      {/* Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <polygon points="0,200 150,80 300,150 450,60 600,120 750,40 900,100 1050,50 1200,130 1200,200" fill="hsl(80 30% 15%)" />
          <polygon points="0,200 100,120 250,160 400,90 550,140 700,70 850,130 1000,80 1150,140 1200,100 1200,200" fill="hsl(120 25% 12%)" />
        </svg>
      </div>

      {/* Pixel tree silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 pixel-trees" />

      {/* Stars twinkling */}
      <div className="absolute top-20 left-[10%] w-1 h-1 bg-gold/80 animate-pulse" />
      <div className="absolute top-32 right-[15%] w-1.5 h-1.5 bg-parchment/60 animate-pulse delay-300" />
      <div className="absolute top-48 left-[30%] w-1 h-1 bg-gold/70 animate-pulse delay-500" />
      <div className="absolute top-24 right-[35%] w-1 h-1 bg-parchment/50 animate-pulse delay-700" />
      <div className="absolute top-60 left-[60%] w-1.5 h-1.5 bg-gold/60 animate-pulse delay-200" />
      <div className="absolute top-16 left-[80%] w-1 h-1 bg-parchment/70 animate-pulse delay-400" />

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
