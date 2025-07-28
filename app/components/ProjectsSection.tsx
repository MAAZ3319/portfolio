"use client";
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Filter, ExternalLink, Github, Folder, GraduationCap } from 'lucide-react';

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

const projectsData: Project[] = [
  // Real Projects
  {
    id: '1',
    title: 'E-Commerce',
    description: 'Full-featured ecommerce web included jwt,auth..etc.',
    image: 'https://res.cloudinary.com/ds4r0bzk0/image/upload/v1752499849/1000140615_e2gc3x.png',
    category: 'real',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js', ],
    liveUrl: 'https://hb-hosiery.web.app',
    githubUrl: 'https://github.com',
    status: 'in-progress',
    year: '2025'
  },
  {
    id: '2',
    title: 'Location Tracker',
    description: 'Connecting to the people with realtime location updates team collaboration, and location tracking.',
    image: 'https://res.cloudinary.com/ds4r0bzk0/image/upload/v1753637230/Logo_ao9w7a.png',
    category: 'real',
    tags: ['Next.js', 'Socket.io', 'MongoDB',  'Vercel'],
    liveUrl: 'https://umrah-connect.web.app',
    githubUrl: 'https://github.com',
    status: 'completed',
    year: '2025'
  },
  {
    id: '3',
    title: 'Weather Intelligence Platform',
    description: 'Advanced weather platform with AI-powered predictions, interactive maps, and personalized alerts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    category: 'real',
    tags: ['React', 'D3.js', 'Node.js', 'Weather API', 'Machine Learning'],
    liveUrl: 'https://maaz-talha.web.app',
    githubUrl: 'https://github.com',
    status: 'completed',
    year: '2025'
  }
];
  // {
  //   id: '4',
  //   title: 'Financial Portfolio Tracker',
  //   description: 'Investment tracking application with real-time market data, portfolio analysis, and risk assessment.',
  //   image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
  //   category: 'real',
  //   tags: ['Vue.js', 'Express', 'Redis', 'Financial APIs', 'Docker'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   status: 'completed',
  //   year: '2023'
  // },

  // Learning Projects
//   {
//     id: '5',
//     title: 'React Component Library',
//     description: 'Custom component library built from scratch to understand React patterns, TypeScript, and design systems.',
//     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop',
//     category: 'learning',
//     tags: ['React', 'TypeScript', 'Storybook', 'Rollup', 'CSS Modules'],
//     githubUrl: 'https://github.com',
//     status: 'completed',
//     year: '2024'
//   },
//   {
//     id: '6',
//     title: 'Machine Learning Playground',
//     description: 'Interactive web app for experimenting with ML algorithms, data visualization, and neural network training.',
//     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
//     category: 'learning',
//     tags: ['Python', 'TensorFlow', 'Flask', 'D3.js', 'Jupyter'],
//     githubUrl: 'https://github.com',
//     status: 'in-progress',
//     year: '2024'
//   },
//   {
//     id: '7',
//     title: 'Blockchain Voting System',
//     description: 'Decentralized voting application built to learn blockchain fundamentals, smart contracts, and Web3 development.',
//     image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
//     category: 'learning',
//     tags: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'MetaMask'],
//     githubUrl: 'https://github.com',
//     status: 'completed',
//     year: '2023'
//   },
//   {
//     id: '8',
//     title: 'Real-time Chat Application',
//     description: 'WebSocket-based chat app with rooms, file sharing, and emoji reactions to learn real-time communication.',
//     image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
//     category: 'learning',
//     tags: ['Node.js', 'Socket.io', 'Express', 'Redis', 'JWT'],
//     githubUrl: 'https://github.com',
//     status: 'completed',
//     year: '2023'
//   },
//   {
//     id: '9',
//     title: 'GraphQL API Explorer',
//     description: 'Interactive GraphQL playground with schema visualization and query builder to master GraphQL concepts.',
//     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
//     category: 'learning',
//     tags: ['GraphQL', 'Apollo', 'React', 'Node.js', 'PostgreSQL'],
//     githubUrl: 'https://github.com',
//     status: 'archived',
//     year: '2023'
//   }
// ];

const filters = [
  { key: 'all', label: 'All Projects', icon: Folder },
  { key: 'real', label: 'Real Projects', icon: ExternalLink },
  { key: 'learning', label: 'Learning Projects', icon: GraduationCap }
];

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedFilter === 'all' || project.category === selectedFilter;
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => project.tags.includes(tag));
    return matchesCategory && matchesTags;
  });

  // Get all unique tags from projects
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags))).sort();

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedFilter('all');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-6">
      {/* Background effects */}
      {/* <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-80 left-60 w-96 h-96 bg-[#00D1FF] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-80 right-60 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1500"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Featured <span className="text-[#00D1FF]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A collection of real-world applications and learning projects that showcase 
            my development journey and technical expertise.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedFilter === filter.key
                      ? 'bg-[#00D1FF] text-black shadow-lg shadow-[#00D1FF]/30'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {allTags.slice(0, 12).map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Clear Filters */}
          {(selectedFilter !== 'all' || selectedTags.length > 0) && (
            <div className="text-center">
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-400 hover:text-[#00D1FF] transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more projects.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h3 className="text-xl text-white mb-6">Project Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl text-[#00D1FF] mb-1">
                  {projectsData.filter(p => p.category === 'real').length}
                </div>
                <div className="text-gray-400 text-sm">Real Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-green-400 mb-1">
                  {projectsData.filter(p => p.category === 'learning').length}
                </div>
                <div className="text-gray-400 text-sm">Learning Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-purple-400 mb-1">
                  {projectsData.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-gray-400 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-orange-400 mb-1">
                  {allTags.length}
                </div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}