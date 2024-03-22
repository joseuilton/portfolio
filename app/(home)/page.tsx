import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { useEffect } from "react";
import { listAllProjects } from "./actions/listAllProjects";
import { listAllEducations } from "./actions/listAllEducations";

export default async function Home() {
  const [projects, educations] = await Promise.all([
    listAllProjects(),
    listAllEducations()
  ]);

  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <EducationSection educations={educations} />
      <ContactSection />
    </main>
  );
}

export const revalidate = 86400;
