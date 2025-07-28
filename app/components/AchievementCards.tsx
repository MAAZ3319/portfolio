import { LucideIcon } from 'lucide-react';

interface AchievementStat {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

interface AchievementCardsProps {
  stats: AchievementStat[];
  loading: boolean;
}

export function AchievementCards({ stats, loading }: AchievementCardsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 animate-pulse"
          >
            <div className="h-4 bg-white/10 rounded w-2/3 mb-4"></div>
            <div className="h-8 bg-white/10 rounded w-1/2 mb-3"></div>
            <div className="h-3 bg-white/10 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="group p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D1FF]/20 transform hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${stat.color} group-hover:shadow-lg transition-all duration-300`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse"></div>
          </div>

          {/* Title */}
          <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>

          {/* Value */}
          <div className="text-2xl md:text-3xl text-white mb-2 transition-all duration-300">
            {stat.value}
          </div>

          {/* Change */}
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            {stat.change}
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D1FF]/0 via-[#00D1FF]/5 to-[#00D1FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}