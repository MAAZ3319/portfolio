import { useState } from 'react';
import { ExternalLink, Github, Calendar, Eye, Star, Clock } from 'lucide-react';
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'real' | 'learning';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'archived';
  year: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  completed: { color: 'text-green-400', bg: 'bg-green-400/20', label: 'Completed' },
  'in-progress': { color: 'text-orange-400', bg: 'bg-orange-400/20', label: 'In Progress' },
  archived: { color: 'text-gray-400', bg: 'bg-gray-400/20', label: 'Archived' }
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const status = statusConfig[project.status];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Main Card */}
      <div className={`
        relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10
        transition-all duration-500 transform
        hover:bg-white/10 hover:border-[#00D1FF]/50 hover:scale-105
        hover:shadow-2xl hover:shadow-[#00D1FF]/20
        animate-fade-in
        ${isHovered ? 'animate-glow' : ''}
      `}>
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 text-xs rounded-full backdrop-blur-md ${
            project.category === 'real' 
              ? 'bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/30' 
              : 'bg-purple-400/20 text-purple-400 border border-purple-400/30'
          }`}>
            {project.category === 'real' ? 'Real Project' : 'Learning'}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-2 py-1 text-xs rounded-full backdrop-blur-md ${status.bg} ${status.color} border border-current/30`}>
            {status.label}
          </span>
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Image overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}></div>

          {/* Year */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white/80">
            <Calendar className="w-3 h-3" />
            <span className="text-xs">{project.year}</span>
          </div>

          {/* Project Links */}
          <div className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-300 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#00D1FF]/20 text-[#00D1FF] hover:bg-[#00D1FF]/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <Eye className="w-8 h-8 text-gray-600" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-white text-lg mb-2 group-hover:text-[#00D1FF] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/20"
                style={{ animationDelay: `${(index * 150) + (i * 50)}ms` }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-white/5 text-gray-500 rounded-md border border-white/10">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>Updated recently</span>
            </div>
            
            {project.category === 'real' && (
              <div className="flex items-center gap-1 text-xs text-[#00D1FF]">
                <Star className="w-3 h-3" />
                <span>Featured</span>
              </div>
            )}
          </div>
        </div>

        {/* Glow Effect */}
        <div className={`
          absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
          bg-gradient-to-r from-[#00D1FF]/0 via-[#00D1FF]/10 to-[#00D1FF]/0
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}></div>

        {/* Pulse Indicator */}
        <div className="absolute top-2 right-2">
          <div className={`w-2 h-2 bg-[#00D1FF] rounded-full transition-all duration-300 ${
            isHovered ? 'animate-pulse scale-150' : ''
          }`}></div>
        </div>
      </div>

      {/* Hover Glow Background */}
      <div className={`
        absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none -z-10
        bg-gradient-to-r from-[#00D1FF]/10 via-[#00D1FF]/20 to-[#00D1FF]/10 blur-xl
        ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
      `}></div>
    </div>
  );
}