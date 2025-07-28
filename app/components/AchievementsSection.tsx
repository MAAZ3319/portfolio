"use client";
import { useState, useEffect } from 'react';
import { AchievementCards } from './AchievementCards';
import { AchievementCharts } from './AchievementCharts';
import { Trophy, Target, Zap, TrendingUp } from 'lucide-react';

interface AchievementData {
  totalAchievements: number;
  completionRate: number;
  streakDays: number;
  pointsEarned: number;
  dailyProgress: Array<{
    date: string;
    achievements: number;
    points: number;
  }>;
  weeklyTrends: Array<{
    week: string;
    completed: number;
    target: number;
  }>;
}

const mockApiData: AchievementData = {
  totalAchievements: 247,
  completionRate: 87.5,
  streakDays: 12,
  pointsEarned: 15840,
  dailyProgress: [
    { date: 'Mon', achievements: 8, points: 640 },
    { date: 'Tue', achievements: 12, points: 920 },
    { date: 'Wed', achievements: 6, points: 480 },
    { date: 'Thu', achievements: 15, points: 1200 },
    { date: 'Fri', achievements: 10, points: 800 },
    { date: 'Sat', achievements: 14, points: 1120 },
    { date: 'Sun', achievements: 9, points: 720 },
  ],
  weeklyTrends: [
    { week: 'Week 1', completed: 45, target: 50 },
    { week: 'Week 2', completed: 52, target: 55 },
    { week: 'Week 3', completed: 48, target: 50 },
    { week: 'Week 4', completed: 58, target: 60 },
    { week: 'Week 5', completed: 62, target: 65 },
    { week: 'Week 6', completed: 71, target: 70 },
  ],
};

export function AchievementsSection() {
  const [data, setData] = useState<AchievementData>(mockApiData);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate API fetch with daily updates
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate data updates (small random variations)
      const updatedData = {
        ...mockApiData,
        totalAchievements: mockApiData.totalAchievements + Math.floor(Math.random() * 5),
        completionRate: Math.min(100, mockApiData.completionRate + (Math.random() - 0.5) * 2),
        pointsEarned: mockApiData.pointsEarned + Math.floor(Math.random() * 200),
        dailyProgress: mockApiData.dailyProgress.map(day => ({
          ...day,
          achievements: day.achievements + Math.floor(Math.random() * 3),
          points: day.points + Math.floor(Math.random() * 100),
        })),
      };
      
      setData(updatedData);
      setLastUpdated(new Date());
      setLoading(false);
    };

    fetchData();

    // Update data every 30 seconds to simulate real-time updates
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const achievementStats = [
    {
      title: 'Total Achievements',
      value: data.totalAchievements.toString(),
      change: '+5 this week',
      icon: Trophy,
      color: 'text-[#00D1FF]',
    },
    {
      title: 'Completion Rate',
      value: `${data.completionRate.toFixed(1)}%`,
      change: '+2.3% from last week',
      icon: Target,
      color: 'text-green-400',
    },
    {
      title: 'Current Streak',
      value: `${data.streakDays} days`,
      change: 'Personal best!',
      icon: Zap,
      color: 'text-orange-400',
    },
    {
      title: 'Points Earned',
      value: data.pointsEarned.toLocaleString(),
      change: '+1,240 today',
      icon: TrendingUp,
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Background effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#00D1FF] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-white mb-2">
            Your <span className="text-[#00D1FF]">Achievements</span>
          </h1>
          <p className="text-gray-400">
            Track your progress and celebrate your wins
          </p>
          <div className="text-sm text-gray-500 mt-2">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        </div>

        {/* Achievement Cards */}
        {/* <AchievementCards stats={achievementStats} loading={loading} /> */}

        {/* Charts Section */}
        <div className="mt-8">
          <AchievementCharts 
            dailyProgress={data.dailyProgress}
            weeklyTrends={data.weeklyTrends}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}