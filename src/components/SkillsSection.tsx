import React from 'react';
import { PixelIcon } from './PixelIcon';

interface Skill {
  name: string;
  icon: string;
  level: number;
  maxLevel: number;
}

const skills: Skill[] = [
  { name: 'Dogs', icon: 'dog', level: 5, maxLevel: 5 },
  { name: 'Woodworking', icon: 'hammer', level: 3, maxLevel: 5 },
  { name: 'Electronics', icon: 'bolt', level: 3, maxLevel: 5 },
  { name: 'Cars', icon: 'car', level: 4, maxLevel: 5 },
  { name: 'Hunting', icon: 'target', level: 3, maxLevel: 5 },
  { name: 'Trekking', icon: 'mountain', level: 4, maxLevel: 5 },
  { name: 'Canoeing', icon: 'boat', level: 3, maxLevel: 5 },
  { name: 'Fishing', icon: 'fish', level: 4, maxLevel: 5 },
  { name: 'Coffee', icon: 'coffee', level: 5, maxLevel: 5 },
  { name: 'Travelling', icon: 'compass', level: 4, maxLevel: 5 },
  { name: 'Music', icon: 'music', level: 3, maxLevel: 5 },
  { name: 'Photography', icon: 'camera', level: 3, maxLevel: 5 },
  { name: 'Wildlife', icon: 'paw', level: 4, maxLevel: 5 },
  { name: 'Books', icon: 'book', level: 4, maxLevel: 5 },
  { name: 'Movies/Series', icon: 'film', level: 5, maxLevel: 5 },
];

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="item-badge group cursor-default">
      <PixelIcon icon={skill.icon} className="text-gold" />
      <div className="flex flex-col">
        <span className="text-parchment">{skill.name}</span>
        <div className="flex gap-1 mt-1">
          {Array.from({ length: skill.maxLevel }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 ${
                i < skill.level ? 'bg-gold' : 'bg-bark'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 relative bg-fantasy-forest overflow-hidden">
      {/* Decorative corner pieces */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-tan" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-tan" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-tan" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-tan" />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-saddle px-6 py-2 mb-4">
            <h2 className="font-pixel text-lg text-gold text-shadow-dark">
              {'< INVENTORY >'} 
            </h2>
          </div>
          <p className="font-body text-xl text-tan">
            Collected interests and abilities
          </p>
        </div>

        {/* Inventory Header */}
        <div className="dialogue-box p-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="font-pixel text-xs text-gold">
              ITEMS COLLECTED: {skills.length}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold" />
                <span className="font-body text-sm text-tan">= MASTERED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-bark" />
                <span className="font-body text-sm text-tan">= LEARNING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="font-body text-lg text-muted-foreground italic">
            [Inventory constantly expanding...]
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
