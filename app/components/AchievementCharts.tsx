"use client";
import { link } from 'fs';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DailyProgress {
  date: string;
  achievements: number;
  points: number;
}

interface WeeklyTrends {
  week: string;
  completed: number;
  target: number;
}

interface AchievementChartsProps {
  dailyProgress: DailyProgress[];
  weeklyTrends: WeeklyTrends[];
  loading: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-xl">
        <p className="text-white text-sm mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AchievementCharts({ dailyProgress, weeklyTrends, loading }: AchievementChartsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 animate-pulse"
          >
            <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-white/5 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Daily Progress Bar Chart */}
      <div className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D1FF]/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-white">Daily Progress</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00D1FF] rounded-full"></div>
            <span className="text-xs text-gray-400">Live Data</span>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyProgress} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="achievements" 
              fill="#00D1FF" 
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Trends Line Chart */}
      <div className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D1FF]/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-white">Weekly Trends</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00D1FF] rounded-full"></div>
              <span className="text-xs text-gray-400">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-xs text-gray-400">Target</span>
            </div>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyTrends} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="week" 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="completed" 
              stroke="#00D1FF" 
              strokeWidth={3}
              dot={{ fill: '#00D1FF', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#00D1FF', strokeWidth: 2, fill: '#00D1FF' }}
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="#A855F7" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#A855F7', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#A855F7', strokeWidth: 2, fill: '#A855F7' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Achievement Breakdown */}
      <div className="lg:col-span-2 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300">
        <h3 className="text-xl text-white mb-6">Recent Achievements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Pearl Thoughts', description: 'Secured Internship', time: '4 days ago', type: 'coding' },
            // { title: 'Early Bird', description: 'Logged in before 8 AM for 7 days', time: '1 day ago', type: 'habit' },
            { title: 'E-commerce', description: 'building for client', time: '6 days ago', type: '',link:"https:hb-hosiery.web.app" },
          ].map((achievement, index) => (
            <div
              key={achievement.title}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                  achievement.type === 'coding' ? 'bg-[#00D1FF]/20 text-[#00D1FF]' :
                  achievement.type === 'habit' ? 'bg-green-400/20 text-green-400' :
                  'bg-purple-400/20 text-purple-400'
                }`}>
                  {achievement.type === 'coding' ? '💻' : achievement.type === 'habit' ? '⏰' : '🤝'}
                </div>
                <span className="text-xs text-gray-500">{achievement.time}</span>
              </div>
              <h4 className="text-white text-sm mb-1">{achievement.title}</h4>
              <p className="text-gray-400 text-xs">{achievement.description}
                <br />
              <a className="text-blue-400"href={achievement.link}>have a look</a>
             
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}