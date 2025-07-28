"use client";
import { AchievementCharts } from './AchievementCharts';

const dailyProgress = [
  { date: "2025-07-21", achievements: 4, points: 60 },
  { date: "2025-07-22", achievements: 2, points: 30 },
  { date: "2025-07-23", achievements: 5, points: 80 },
  { date: "2025-07-21", achievements: 4, points: 60 },
  { date: "2025-07-22", achievements: 2, points: 30 },
  { date: "2025-07-23", achievements: 5, points: 80 },
  // ...your actual data
];

const weeklyTrends = [
  { week: "Week 1", completed: 10, target: 12 },
  { week: "Week 2", completed: 8, target: 10 },
   { week: "Week 1", completed: 10, target: 12 },
  { week: "Week 2", completed: 8, target: 10 },
  // ...your actual data
];

export default function Home() {
  return (
    <div className='bg-green-300/10'>
     <h1 className='text-bold text-xxl ml-10 mt-10 mb-0'>   My Progess Tracker</h1>
    <div className='w-full px-2 sm:px-8 py-4 p-20 text-bold' >
       
    <AchievementCharts
      dailyProgress={dailyProgress}
      weeklyTrends={weeklyTrends}
      loading={false}
    />
    </div>
    </div>
    
  );
}