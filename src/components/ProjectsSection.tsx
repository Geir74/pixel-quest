import React from 'react';

interface Quest {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  rewards: string[];
}

const quests: Quest[] = [
  {
    id: 'quest-001',
    title: 'Project Alpha',
    subtitle: 'Linux Adventure',
    description: 'Description of project goes here. An expedition into the world of open-source operating systems.',
    status: 'completed',
    difficulty: 'Medium',
    rewards: ['Terminal Mastery', 'Penguin Badge'],
  },
  {
    id: 'quest-002',
    title: 'Quest: Build Thing',
    subtitle: 'Hardware Crafting',
    description: 'Description of project goes here. A hands-on journey combining physical and digital craftsmanship.',
    status: 'in-progress',
    difficulty: 'Hard',
    rewards: ['Maker\'s Mark', 'Circuit Wizard'],
  },
  {
    id: 'quest-003',
    title: 'Achievement Unlocked',
    subtitle: 'First Website',
    description: 'Description of project goes here. The inaugural quest into the realm of web development.',
    status: 'completed',
    difficulty: 'Easy',
    rewards: ['Web Pioneer', 'HTML Novice'],
  },
  {
    id: 'quest-004',
    title: 'Side Quest',
    subtitle: 'Mystery Project',
    description: 'Description of project goes here. Details shrouded in mystery, rewards unknown.',
    status: 'planned',
    difficulty: 'Legendary',
    rewards: ['???', '???'],
  },
];

const statusColors = {
  completed: 'bg-primary text-primary-foreground',
  'in-progress': 'bg-gold text-bark',
  planned: 'bg-muted text-muted-foreground',
};

const difficultyColors = {
  Easy: 'text-primary',
  Medium: 'text-secondary',
  Hard: 'text-gold',
  Legendary: 'text-destructive',
};

const QuestCard: React.FC<{ quest: Quest; index: number }> = ({ quest, index }) => {
  return (
    <div className="quest-card group hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform">
      {/* Quest Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="font-pixel text-xs text-muted-foreground mb-1">
            QUEST #{String(index + 1).padStart(3, '0')}
          </div>
          <h3 className="font-pixel text-sm text-gold mb-1">
            {quest.title}
          </h3>
          <p className="font-body text-lg text-tan">
            {quest.subtitle}
          </p>
        </div>
        <div className={`px-3 py-1 font-pixel text-[10px] ${statusColors[quest.status]}`}>
          {quest.status.toUpperCase().replace('-', ' ')}
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-lg text-foreground mb-4 leading-relaxed">
        {quest.description}
      </p>

      {/* Quest Details */}
      <div className="flex flex-wrap gap-4 mb-4 pt-4 border-t-2 border-saddle">
        <div>
          <span className="font-pixel text-xs text-muted-foreground block mb-1">DIFFICULTY</span>
          <span className={`font-pixel text-xs ${difficultyColors[quest.difficulty]}`}>
            {'★'.repeat(
              quest.difficulty === 'Easy' ? 1 :
              quest.difficulty === 'Medium' ? 2 :
              quest.difficulty === 'Hard' ? 3 : 4
            )}
            {' '}{quest.difficulty}
          </span>
        </div>
      </div>

      {/* Rewards */}
      <div>
        <span className="font-pixel text-xs text-muted-foreground block mb-2">REWARDS</span>
        <div className="flex flex-wrap gap-2">
          {quest.rewards.map((reward) => (
            <span 
              key={reward}
              className="bg-mossy px-3 py-1 font-body text-sm text-tan"
            >
              🏆 {reward}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-saddle px-6 py-2 mb-4">
            <h2 className="font-pixel text-lg text-gold text-shadow-dark">
              {'< QUEST LOG >'} 
            </h2>
          </div>
          <p className="font-body text-xl text-tan">
            Adventures completed and in progress
          </p>
        </div>

        {/* Quest Stats */}
        <div className="dialogue-box p-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="font-pixel text-2xl text-primary mb-1">
                {quests.filter(q => q.status === 'completed').length}
              </div>
              <div className="font-body text-sm text-tan">Completed</div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-2xl text-gold mb-1">
                {quests.filter(q => q.status === 'in-progress').length}
              </div>
              <div className="font-body text-sm text-tan">In Progress</div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-2xl text-muted-foreground mb-1">
                {quests.filter(q => q.status === 'planned').length}
              </div>
              <div className="font-body text-sm text-tan">Planned</div>
            </div>
          </div>
        </div>

        {/* Quest Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {quests.map((quest, index) => (
            <QuestCard key={quest.id} quest={quest} index={index} />
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-8">
          <p className="font-body text-lg text-muted-foreground italic">
            [More quests loading...]
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
