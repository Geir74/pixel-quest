import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative bg-parchment-map">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-saddle px-6 py-2 mb-4">
            <h2 className="font-pixel text-lg text-gold text-shadow-dark">
              {'< ABOUT >'} 
            </h2>
          </div>
        </div>

        {/* Character Stats Box */}
        <div className="quest-card">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-saddle">
            {/* Character Avatar Placeholder */}
            <div className="w-20 h-20 bg-mossy pixel-border flex items-center justify-center shrink-0">
              <span className="font-pixel text-2xl text-gold">?</span>
            </div>
            
            <div>
              <h3 className="font-pixel text-sm text-tan mb-2">ADVENTURER</h3>
              <div className="font-body text-xl text-parchment">
                Level ?? Explorer
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Class Description */}
            <div>
              <h4 className="font-pixel text-xs text-gold mb-3">{'>'} CLASS</h4>
              <p className="font-body text-xl text-foreground leading-relaxed">
                Digital Craftsperson & Hobby Collector
              </p>
            </div>

            {/* Bio */}
            <div>
              <h4 className="font-pixel text-xs text-gold mb-3">{'>'} ALIGNMENT</h4>
              <p className="font-body text-xl text-foreground leading-relaxed">
                Curious Neutral
              </p>
            </div>
          </div>

          {/* Story Text */}
          <div className="dialogue-box p-6">
            <p className="font-body text-xl text-foreground leading-relaxed mb-4">
              "An adventurer exploring the digital realm, collecting skills and 
              experiences along the way. Each project is a new quest, each hobby 
              a side mission worth pursuing."
            </p>
            <p className="font-body text-xl text-foreground leading-relaxed mb-4">
              From the forests of woodworking to the circuits of electronics, 
              from the trails of the wilderness to the highways of automotive 
              tinkering — this journey spans many worlds.
            </p>
            <p className="font-body text-lg text-muted-foreground italic">
              [Press any key to continue...]
            </p>
          </div>

          {/* Experience Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-pixel text-xs text-tan">EXPERIENCE</span>
              <span className="font-pixel text-xs text-gold">LVL ???</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: '65%' }}
              />
            </div>
            <div className="font-body text-sm text-muted-foreground mt-1 text-right">
              ??? / ??? XP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
