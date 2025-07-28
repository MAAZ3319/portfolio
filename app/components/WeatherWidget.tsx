import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, Zap, MapPin, Thermometer } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherWidgetProps {
  onWeatherChange: (condition: string) => void;
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: CloudSnow,
  stormy: Zap,
};

const mockWeatherData: WeatherData[] = [
  { location: 'Hyderabad', temperature: 24, condition: 'sunny', humidity: 65, windSpeed: 12 },
  { location: 'London', temperature: 16, condition: 'rainy', humidity: 85, windSpeed: 15 },
  { location: 'Bengaluru', temperature: 30, condition: 'sunny', humidity: 78, windSpeed: 8 },
  { location: 'Jammu&Kashmir', temperature: -2, condition: 'snowy', humidity: 45, windSpeed: 20 },
  { location: 'Mumbai', temperature: 28, condition: 'stormy', humidity: 82, windSpeed: 25 },
];

export function WeatherWidget({ onWeatherChange }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData>(mockWeatherData[0]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate getting user location and weather data
    const timer = setTimeout(() => {
      setLoading(false);
      onWeatherChange(weather.condition);
    }, 1000);

    return () => clearTimeout(timer);
  }, [weather.condition, onWeatherChange]);

  // Cycle through different weather conditions for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % mockWeatherData.length;
        const nextWeather = mockWeatherData[nextIndex];
        setWeather(nextWeather);
        onWeatherChange(nextWeather.condition);
        return nextIndex;
      });
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [onWeatherChange]);

  const WeatherIcon = weatherIcons[weather.condition as keyof typeof weatherIcons];

  if (loading) {
    return (
      <div className="p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 w-80 animate-pulse">
        <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
        <div className="h-12 bg-white/20 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
        <div className="h-4 bg-white/20 rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 w-80 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
      {/* Location */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-[#00D1FF]" />
        <span className="text-white text-sm">{weather.location}</span>
      </div>

      {/* Temperature and Icon */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-[#00D1FF]" />
          <span className="text-4xl text-white">{weather.temperature}°C</span>
        </div>
        <WeatherIcon className="w-12 h-12 text-[#00D1FF]" />
      </div>

      {/* Weather condition */}
      <div className="mb-4">
        <span className="text-white text-lg capitalize">{weather.condition}</span>
      </div>

      {/* Additional info */}
      <div className="space-y-2 text-sm text-gray-300">
        <div className="flex justify-between">
          <span>Humidity</span>
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>Wind Speed</span>
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>

      {/* Refresh indicator */}
      <div className="mt-4 text-xs text-gray-400 text-center">
        Updates every 10 seconds
      </div>
    </div>
  );
}