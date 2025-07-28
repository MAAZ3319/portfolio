// "use client"
// import { useState, useEffect } from 'react';
// import { WeatherWidget } from './WeatherWidget';
// import { AIChatbot } from './AIChatbot';
// import { Cloud, Sun, CloudRain, CloudSnow, Zap } from 'lucide-react';

// type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy';

// const weatherBackgrounds: Record<WeatherCondition, string> = {
//   sunny: 'bg-gradient-to-br from-yellow-400 via-blue-400 to-blue-900',
//   cloudy: 'bg-gradient-to-br from-gray-300 via-gray-500 to-gray-900',
//   rainy: 'bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900',
//   snowy: 'bg-gradient-to-br from-blue-100 via-blue-900 to-indigo-900',
//   stormy: 'bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900',
// };

// export function HeroSection() {
//   const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>('sunny');
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${weatherBackgrounds[weatherCondition]}`}>
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-[#00D1FF] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-4 pt-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
//           {/* Left side - Hero content */}
//           <div className="flex-1 text-center lg:text-left lg:pr-12">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl text-white opacity-0 animate-fade-in">
//                 Creative{''}
//                 <span className="text-[#00D1FF]">Developer</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-300 max-w-2xl opacity-0 animate-fade-in delay-300">
//                 Crafting digital experiences with passion and precision. 
//                 Building the future, one line of code at a time.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in delay-500">
//                 <button className="px-8 py-3 bg-[#00D1FF] text-black rounded-full hover:bg-[#00B8E6] transition-all duration-300 transform hover:scale-105">
//                   View My Work
//                 </button>
//                 <button className="px-8 py-3 border-2 border-[#00D1FF] text-[#00D1FF] rounded-full hover:bg-[#00D1FF] hover:text-black transition-all duration-300">
//                   Get In Touch
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Weather widget */}
//           <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
//             <WeatherWidget onWeatherChange={setWeatherCondition} />
//           </div>
//         </div>
//       </div>

//       {/* AI Chatbot */}
//       <AIChatbot weatherCondition={weatherCondition} />

//       {/* Glassmorphism navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 p-4">
//         <div className="container mx-auto">
//           <div className="flex justify-between items-center p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
//             <div className="text-white text-xl">Portfolio</div>
//             <div className="hidden md:flex space-x-8">
//               <a href="#about" className="text-white hover:text-[#00D1FF] transition-colors">About</a>
//               <a href="#work" className="text-white hover:text-[#00D1FF] transition-colors">Work</a>
//               <a href="#contact" className="text-white hover:text-[#00D1FF] transition-colors">Contact</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { WeatherWidget } from "./WeatherWidget";
import { AIChatbot } from "./AIChatbot";
export type WeatherCondition = "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";


import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  Zap,
} from "lucide-react";





const weatherBackgrounds: Record<WeatherCondition, string> = {
  sunny: "bg-gradient-to-br from-yellow-400 via-blue-400 to-blue-900",
  cloudy: "bg-gradient-to-br from-gray-300 via-gray-500 to-gray-900",
  rainy: "bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900",
  snowy: "bg-gradient-to-br from-blue-100 via-blue-900 to-indigo-900",
  stormy: "bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900",
};

export function HeroSection() {
  const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>("sunny");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  <WeatherWidget onWeatherChange={(condition) => {
  if (
    condition === "sunny" ||
    condition === "cloudy" ||
    condition === "rainy" ||
    condition === "snowy" ||
    condition === "stormy"
  ) {
    setWeatherCondition(condition);
  }
}} />


  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${weatherBackgrounds[weatherCondition]}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00D1FF] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

     {/* Main content with dynamic background */}
<div
  className={`relative z-10 container mx-auto px-4 pt-20 transition-all duration-1000`}
>
  <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
    {/* Left side - Hero content */}
    <div className="space-y-6 text-center lg:text-left">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-cyan-400">
        Maaz Talha
      </h1>

      {/* Typing animated slogan */}
      <AnimatedSlogan />

      <p className="text-lg md:text-2xl text-gray-300 max-w-xl">
        I craft scalable, interactive digital solutions using modern web technologies.
        <br />
        Driven by precision, passion, and continuous learning.
      </p>
    </div>

    {/* Right side - Weather widget */}
    <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
      <WeatherWidget
  onWeatherChange={(condition) => {
    // Ensure only valid WeatherCondition is passed
    if (
      condition === "sunny" ||
      condition === "cloudy" ||
      condition === "rainy" ||
      condition === "snowy" ||
      condition === "stormy"
    ) {
      setWeatherCondition(condition);
    } else {
      console.warn("Invalid weather condition:", condition);
    }
  }}
/>

    </div>
  </div>
</div>

      {/* AI Chatbot */}
      <AIChatbot weatherCondition={weatherCondition} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
            <div className="text-white text-xl">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-[#00D1FF] transition-colors">About</a>
              <a href="#work" className="text-white hover:text-[#00D1FF] transition-colors">Work</a>
              <a href="#contact" className="text-white hover:text-[#00D1FF] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// 👇 Component for slogan typing animation
function AnimatedSlogan() {
  const slogans = ["I Code.", "I Create.", "I Connect."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="text-white text-xl md:text-2xl font-mono h-10 min-h-[40px]">
      <span className="animate-typing inline-block border-r-2 border-[#00D1FF] pr-2 overflow-hidden whitespace-nowrap w-full max-w-full">
        {slogans[index]}
      </span>
    </div>
  );
}
