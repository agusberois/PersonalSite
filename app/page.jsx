import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
   {/* <ProjectsSection/> */ } 
    <ExperienceSection/>
    <Footer/>
   </>
  );
}