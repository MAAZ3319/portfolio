"use client";
import { useState } from 'react';
import { SkillCard } from './SkillCard';
import { Code, Database, Wrench, Palette, Cloud, Smartphone } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  projects: string[];
  description: string;
  icon: string;
  color: string;
}

const skillsData: Skill[] = [
  // Frontend
  {
    name: 'JavaScript',
    category: 'Frontend',
    proficiency: 95,
    projects: ['Weather App', 'Portfolio Site', 'Chat Application'],
    description: 'Modern ES6+ JavaScript for interactive web applications',
    icon: '🚀',
    color: 'text-yellow-400'
  },
  {
    name: 'React',
    category: 'Frontend',
    proficiency: 90,
    projects: ['Dashboard UI', 'E-commerce Site', 'Admin Panel'],
    description: 'Building dynamic user interfaces with hooks and context',
    icon: '⚛️',
    color: 'text-blue-400'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 85,
    projects: ['Enterprise App', 'API Client', 'Component Library'],
    description: 'Type-safe JavaScript for large-scale applications',
    icon: '🔷',
    color: 'text-blue-500'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    proficiency: 92,
    projects: ['Portfolio Site', 'Landing Pages', 'Mobile App UI'],
    description: 'Utility-first CSS framework for rapid UI development',
    icon: '🎨',
    color: 'text-cyan-400'
  },
  
  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    proficiency: 88,
    projects: ['REST API', 'Microservices', 'Real-time Chat'],
    description: 'Server-side JavaScript runtime for scalable applications',
    icon: '🟢',
    color: 'text-green-400'
  },
  {
    name: 'Python',
    category: 'Backend',
    proficiency: 82,
    projects: ['Data Analysis', 'ML Models', 'Automation Scripts'],
    description: 'Versatile language for web development and data science',
    icon: '🐍',
    color: 'text-green-500'
  },
  // {
  //   name: 'PostgreSQL',
  //   category: 'Backend',
  //   proficiency: 78,
  //   projects: ['User Management', 'Analytics DB', 'E-commerce Backend'],
  //   description: 'Advanced relational database for complex applications',
  //   icon: '🐘',
  //   color: 'text-blue-600'
  // },
  
  // Tools & DevOps
  {
    name: 'Git',
    category: 'Tools',
    proficiency: 90,
    projects: ['All Projects', 'Team Collaboration', 'Version Control'],
    description: 'Distributed version control for code management',
    icon: '📝',
    color: 'text-orange-400'
  },
  // {
  //   name: 'Docker',
  //   category: 'Tools',
  //   proficiency: 75,
  //   projects: ['App Deployment', 'Development Environment', 'CI/CD Pipeline'],
  //   description: 'Containerization for consistent deployment environments',
  //   icon: '🐳',
  //   color: 'text-blue-400'
  // },
  // {
  //   name: 'AWS',
  //   category: 'Cloud',
  //   proficiency: 70,
  //   projects: ['Web Hosting', 'Serverless Functions', 'File Storage'],
  //   description: 'Cloud infrastructure for scalable web applications',
  //   icon: '☁️',
  //   color: 'text-orange-500'
  // },
  
  // Design & UX
  {
    name: 'Figma',
    category: 'Design',
    proficiency: 85,
    projects: ['UI Mockups', 'Design System', 'Prototypes'],
    description: 'Collaborative interface design and prototyping',
    icon: '🎯',
    color: 'text-purple-400'
  },
  // {
  //   name: 'Adobe XD',
  //   category: 'Design',
  //   proficiency: 80,
  //   projects: ['Mobile Apps', 'Wireframes', 'User Journey Maps'],
  //   description: 'User experience design and interactive prototypes',
  //   icon: '✨',
  //   color: 'text-pink-400'
  // }
];

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Design'];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-800">
      {/* Background effects */}
      {/* <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-60 right-40 w-96 h-96 bg-[#00D1FF] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-60 left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Technical <span className="text-[#00D1FF]">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Explore my technical expertise and the projects where I've applied these skills. 
            Hover over each skill to see detailed usage examples.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#00D1FF] text-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h3 className="text-xl text-white mb-4">Skills Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl text-[#00D1FF] mb-1">{skillsData.filter(s => s.category === 'Frontend').length}</div>
                <div className="text-gray-400 text-sm">Frontend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-green-400 mb-1">{skillsData.filter(s => s.category === 'Backend').length}</div>
                <div className="text-gray-400 text-sm">Backend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-orange-400 mb-1">{skillsData.filter(s => s.category === 'Tools').length}</div>
                <div className="text-gray-400 text-sm">Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-purple-400 mb-1">{skillsData.filter(s => ['Cloud', 'Design'].includes(s.category)).length}</div>
                <div className="text-gray-400 text-sm">Other</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}