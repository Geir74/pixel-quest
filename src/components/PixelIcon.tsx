import React from 'react';

interface PixelIconProps {
  icon: string;
  className?: string;
}

// Simple pixel art icons as SVG
const icons: Record<string, React.ReactNode> = {
  dog: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="4" y="2" width="2" height="2" />
      <rect x="10" y="2" width="2" height="2" />
      <rect x="2" y="4" width="4" height="2" />
      <rect x="10" y="4" width="4" height="2" />
      <rect x="4" y="6" width="8" height="4" />
      <rect x="6" y="7" width="2" height="1" fill="hsl(var(--bark))" />
      <rect x="8" y="7" width="2" height="1" fill="hsl(var(--bark))" />
      <rect x="7" y="8" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="4" y="10" width="2" height="4" />
      <rect x="10" y="10" width="2" height="4" />
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="7" y="0" width="2" height="2" fill="hsl(var(--forest-green))" />
      <rect x="5" y="2" width="6" height="2" fill="hsl(var(--forest-green))" />
      <rect x="3" y="4" width="10" height="2" fill="hsl(var(--forest-green))" />
      <rect x="5" y="6" width="6" height="2" fill="hsl(var(--forest-green))" />
      <rect x="2" y="8" width="12" height="2" fill="hsl(var(--forest-green))" />
      <rect x="7" y="10" width="2" height="4" fill="hsl(var(--saddle-brown))" />
      <rect x="5" y="14" width="6" height="2" fill="hsl(var(--saddle-brown))" />
    </svg>
  ),
  hammer: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="2" y="2" width="8" height="4" fill="hsl(var(--muted-foreground))" />
      <rect x="6" y="6" width="2" height="8" fill="hsl(var(--saddle-brown))" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="8" y="0" width="2" height="2" fill="hsl(var(--gold))" />
      <rect x="6" y="2" width="4" height="2" fill="hsl(var(--gold))" />
      <rect x="4" y="4" width="6" height="2" fill="hsl(var(--gold))" />
      <rect x="6" y="6" width="6" height="2" fill="hsl(var(--gold))" />
      <rect x="8" y="8" width="4" height="2" fill="hsl(var(--gold))" />
      <rect x="6" y="10" width="4" height="2" fill="hsl(var(--gold))" />
      <rect x="4" y="12" width="4" height="2" fill="hsl(var(--gold))" />
      <rect x="6" y="14" width="2" height="2" fill="hsl(var(--gold))" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="2" y="6" width="12" height="4" />
      <rect x="4" y="4" width="8" height="2" />
      <rect x="3" y="10" width="3" height="3" fill="hsl(var(--muted-foreground))" />
      <rect x="10" y="10" width="3" height="3" fill="hsl(var(--muted-foreground))" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="6" y="0" width="4" height="2" fill="hsl(var(--destructive))" />
      <rect x="4" y="2" width="2" height="2" fill="hsl(var(--destructive))" />
      <rect x="10" y="2" width="2" height="2" fill="hsl(var(--destructive))" />
      <rect x="2" y="4" width="12" height="2" fill="hsl(var(--parchment))" />
      <rect x="2" y="6" width="12" height="2" fill="hsl(var(--destructive))" />
      <rect x="6" y="6" width="4" height="2" fill="hsl(var(--gold))" />
      <rect x="2" y="8" width="12" height="2" fill="hsl(var(--parchment))" />
      <rect x="4" y="10" width="2" height="2" fill="hsl(var(--destructive))" />
      <rect x="10" y="10" width="2" height="2" fill="hsl(var(--destructive))" />
      <rect x="6" y="12" width="4" height="2" fill="hsl(var(--destructive))" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="7" y="2" width="2" height="2" fill="hsl(var(--muted-foreground))" />
      <rect x="5" y="4" width="6" height="2" fill="hsl(var(--muted-foreground))" />
      <rect x="3" y="6" width="10" height="2" fill="hsl(var(--olive-drab))" />
      <rect x="1" y="8" width="14" height="2" fill="hsl(var(--olive-drab))" />
      <rect x="0" y="10" width="16" height="4" fill="hsl(var(--forest-green))" />
    </svg>
  ),
  fish: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="0" y="6" width="2" height="4" fill="hsl(var(--secondary))" />
      <rect x="2" y="4" width="2" height="8" fill="hsl(var(--secondary))" />
      <rect x="4" y="5" width="8" height="6" fill="hsl(var(--secondary))" />
      <rect x="12" y="6" width="2" height="4" fill="hsl(var(--secondary))" />
      <rect x="14" y="7" width="2" height="2" fill="hsl(var(--secondary))" />
      <rect x="10" y="7" width="2" height="2" fill="hsl(var(--bark))" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="4" y="0" width="2" height="2" fill="hsl(var(--muted-foreground))" />
      <rect x="7" y="1" width="2" height="3" fill="hsl(var(--muted-foreground))" />
      <rect x="3" y="4" width="10" height="2" fill="hsl(var(--saddle-brown))" />
      <rect x="3" y="6" width="8" height="8" fill="hsl(var(--saddle-brown))" />
      <rect x="11" y="7" width="3" height="4" fill="hsl(var(--saddle-brown))" />
      <rect x="5" y="8" width="4" height="2" fill="hsl(var(--tan))" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="6" y="0" width="4" height="2" fill="hsl(var(--tan))" />
      <rect x="4" y="2" width="2" height="2" fill="hsl(var(--tan))" />
      <rect x="10" y="2" width="2" height="2" fill="hsl(var(--tan))" />
      <rect x="2" y="4" width="12" height="8" fill="hsl(var(--tan))" />
      <rect x="4" y="6" width="8" height="4" fill="hsl(var(--bark))" />
      <rect x="7" y="5" width="2" height="2" fill="hsl(var(--destructive))" />
      <rect x="7" y="9" width="2" height="2" fill="hsl(var(--parchment))" />
      <rect x="4" y="12" width="2" height="2" fill="hsl(var(--tan))" />
      <rect x="10" y="12" width="2" height="2" fill="hsl(var(--tan))" />
      <rect x="6" y="14" width="4" height="2" fill="hsl(var(--tan))" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="6" y="0" width="2" height="10" />
      <rect x="8" y="2" width="6" height="2" />
      <rect x="12" y="4" width="2" height="8" />
      <rect x="2" y="10" width="6" height="4" />
      <rect x="10" y="10" width="6" height="4" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="5" y="2" width="6" height="2" fill="hsl(var(--muted-foreground))" />
      <rect x="2" y="4" width="12" height="10" fill="hsl(var(--muted-foreground))" />
      <rect x="5" y="6" width="6" height="6" fill="hsl(var(--bark))" />
      <rect x="6" y="7" width="4" height="4" fill="hsl(var(--accent))" />
    </svg>
  ),
  paw: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="3" y="2" width="3" height="3" />
      <rect x="10" y="2" width="3" height="3" />
      <rect x="1" y="6" width="3" height="3" />
      <rect x="12" y="6" width="3" height="3" />
      <rect x="4" y="8" width="8" height="6" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="2" y="2" width="12" height="12" fill="hsl(var(--saddle-brown))" />
      <rect x="4" y="2" width="2" height="12" fill="hsl(var(--tan))" />
      <rect x="6" y="4" width="6" height="2" fill="hsl(var(--parchment))" />
      <rect x="6" y="8" width="4" height="1" fill="hsl(var(--parchment))" />
      <rect x="6" y="10" width="5" height="1" fill="hsl(var(--parchment))" />
    </svg>
  ),
  film: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="0" y="2" width="16" height="12" fill="hsl(var(--muted-foreground))" />
      <rect x="1" y="3" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="1" y="7" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="1" y="11" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="13" y="3" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="13" y="7" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="13" y="11" width="2" height="2" fill="hsl(var(--bark))" />
      <rect x="4" y="4" width="8" height="8" fill="hsl(var(--bark))" />
      <rect x="7" y="6" width="4" height="4" fill="hsl(var(--gold))" />
    </svg>
  ),
  boat: (
    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
      <rect x="7" y="0" width="2" height="8" fill="hsl(var(--saddle-brown))" />
      <rect x="8" y="2" width="6" height="4" fill="hsl(var(--parchment))" />
      <rect x="2" y="8" width="12" height="4" fill="hsl(var(--saddle-brown))" />
      <rect x="0" y="12" width="16" height="2" fill="hsl(var(--secondary))" />
      <rect x="1" y="14" width="14" height="2" fill="hsl(var(--secondary))" />
    </svg>
  ),
};

export const PixelIcon: React.FC<PixelIconProps> = ({ icon, className = '' }) => {
  const iconElement = icons[icon];
  
  if (!iconElement) {
    // Default square if icon not found
    return (
      <div className={`w-8 h-8 bg-accent ${className}`} />
    );
  }

  return (
    <div className={`w-8 h-8 ${className}`}>
      {iconElement}
    </div>
  );
};

export default PixelIcon;
