
import HeroSection from "../components/HeroSection";

import TechStack from "@/components/TechStack";

import AboutPage from "@/components/About";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1 className="text-2xl  text-center">Home</h1> */}
        <HeroSection/>
       
        <TechStack/>
        
        <AboutPage/>
    </main>
  );
}
