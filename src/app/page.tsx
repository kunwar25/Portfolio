import { main } from "motion/react-client";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contactinfo from "@/components/Contactinfo";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1 className="text-2xl  text-center">Home</h1> */}
        <HeroSection/>
        <Projects/>
        <TechStack/>
        <Contactinfo/>
    </main>
  );
}
