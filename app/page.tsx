import Image from "next/image";
import {AchievementCards} from "./components/AchievementCards";
import { tree } from "next/dist/build/templates/app-page";
import { AchievementCharts } from "./components/AchievementCharts";
import {AchievementsSection} from "./components/AchievementsSection";
import {AIChatbot} from "./components/AIChatbot";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import Actual from "./components/Actual";
export default function Home() {
  return (

    
<div>

<HeroSection />
      <Actual />
      {/* <AchievementsSection /> */}
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

 </div>
   
  );
}


<div>
      <div>
      <AchievementCards stats={[]} loading={true}/>
      </div>
      <div>
      <AchievementCharts dailyProgress={[]} weeklyTrends={[]} loading={true}/>
      </div>
      <div>
        <AchievementsSection />
      </div>
      <div>
        <AIChatbot weatherCondition="sunny" />
      </div>

    </div>