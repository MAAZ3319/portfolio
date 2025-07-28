import { ExternalLink, Linkedin, Github, Twitter, Instagram, Globe } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shaik-maaz-talha-a81869280/',
    icon: Linkedin,
    color: 'text-blue-400',
    hoverColor: 'hover:bg-blue-400/20',
    description: 'Connect professionally'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/MAAZ3319',
    icon: Github,
    color: 'text-gray-300',
    hoverColor: 'hover:bg-gray-300/20',
    description: 'View my code'
  },
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/yourusername',
  //   icon: Twitter,
  //   color: 'text-blue-400',
  //   hoverColor: 'hover:bg-blue-400/20',
  //   description: 'Follow for updates'
  // },
  // {
  //   name: 'Portfolio',
  //   url: 'https://yourportfolio.com',
  //   icon: Globe,
  //   color: 'text-[#00D1FF]',
  //   hoverColor: 'hover:bg-[#00D1FF]/20',
  //   description: 'Visit my website'
  // }
];

export function SocialLinks() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-white text-xl mb-2">Find me online</h3>
        <p className="text-gray-400 text-sm">
          Let's connect on social media and stay in touch
        </p>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 
                hover:bg-white/10 hover:border-[#00D1FF]/30 ${social.hoverColor}
                transition-all duration-300 transform hover:scale-105
                animate-fade-in
              `}
              style={{ animationDelay: `${600 + (index * 100)}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-white/10 ${social.color} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white group-hover:text-[#00D1FF] transition-colors">
                      {social.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-[#00D1FF] transition-colors" />
                  </div>
                  <p className="text-gray-400 text-xs">{social.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
        <h4 className="text-white mb-4">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-[#00D1FF] text-2xl mb-1">2+</div>
            <div className="text-gray-400 text-xs">Projects Completed</div>
          </div>
          <div>
            <div className="text-green-400 text-2xl mb-1">99%</div>
            <div className="text-gray-400 text-xs">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-purple-400 text-2xl mb-1">1+</div>
            <div className="text-gray-400 text-xs">Years Experience</div>
          </div>
          <div>
            <div className="text-orange-400 text-2xl mb-1">24h</div>
            <div className="text-gray-400 text-xs">Response Time</div>
          </div>
        </div>
      </div>

      {/* Availability Status */}
      <div className="p-4 rounded-xl backdrop-blur-md bg-green-400/10 border border-green-400/30">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div>
            <span className="text-green-400 text-sm">Available for new projects</span>
            <p className="text-gray-400 text-xs">Currently accepting freelance work</p>
          </div>
        </div>
      </div>
    </div>
  );
}