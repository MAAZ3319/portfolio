import { useState } from 'react';
import { ChevronRight, Code, Zap } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  projects: string[];
  description: string;
  icon: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        setIsHovered(true);
        setTimeout(() => setShowTooltip(true), 200);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Main Card */}
      <div className={`
        relative p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 
        transition-all duration-500 transform cursor-pointer
        hover:bg-white/10 hover:border-[#00D1FF]/50 hover:scale-105
        hover:shadow-2xl hover:shadow-[#00D1FF]/20
        animate-fade-in
        ${isHovered ? 'animate-glow' : ''}
      `}>
        {/* Skill Icon and Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">{skill.icon}</div>
          <div>
            <h3 className="text-white text-lg">{skill.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full bg-white/10 ${skill.color}`}>
              {skill.category}
            </span>
          </div>
        </div>

        {/* Proficiency Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">Proficiency</span>
            <span className="text-[#00D1FF] text-sm">{skill.proficiency}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#00D1FF] to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: isHovered ? `${skill.proficiency}%` : '0%',
                transitionDelay: isHovered ? '300ms' : '0ms'
              }}
            ></div>
          </div>
        </div>

        {/* Projects Count */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">
            {skill.projects.length} projects
          </span>
          <ChevronRight className={`w-4 h-4 text-[#00D1FF] transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </div>

        {/* Glow Effect */}
        <div className={`
          absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
          bg-gradient-to-r from-[#00D1FF]/0 via-[#00D1FF]/10 to-[#00D1FF]/0
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}></div>

        {/* Pulse Indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-2 h-2 bg-[#00D1FF] rounded-full transition-all duration-300 ${
            isHovered ? 'animate-pulse scale-150' : ''
          }`}></div>
        </div>
      </div>

      {/* Expanded Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-xl backdrop-blur-md bg-gray-900/95 border border-[#00D1FF]/30 shadow-2xl shadow-[#00D1FF]/20 z-20 animate-fade-in">
          {/* Description */}
          <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
          
          {/* Projects */}
          <div className="mb-3">
            <h4 className="text-[#00D1FF] text-sm mb-2 flex items-center gap-2">
              <Code className="w-3 h-3" />
              Used in Projects:
            </h4>
            <div className="flex flex-wrap gap-2">
              {skill.projects.map((project, i) => (
                <span
                  key={project}
                  className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {project}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Zap className="w-3 h-3 text-[#00D1FF]" />
            <span>
              {skill.proficiency >= 90 ? 'Expert Level' :
               skill.proficiency >= 80 ? 'Advanced' :
               skill.proficiency >= 70 ? 'Intermediate' : 'Learning'}
            </span>
          </div>

          {/* Tooltip Arrow */}
          <div className="absolute -top-2 left-6 w-4 h-4 bg-gray-900 border-l border-t border-[#00D1FF]/30 transform rotate-45"></div>
        </div>
      )}

      {/* Hover Glow Background */}
      <div className={`
        absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none -z-10
        bg-gradient-to-r from-[#00D1FF]/5 via-[#00D1FF]/10 to-[#00D1FF]/5 blur-xl
        ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
      `}></div>
    </div>
  );
}