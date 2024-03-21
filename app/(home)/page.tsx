import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
