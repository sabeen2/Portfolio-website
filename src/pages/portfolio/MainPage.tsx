import NavBar from "./NavBar";
import Hero from "./Hero";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import ProjectsSection from "./Projects";
import ContactMe from "./ContactMe";
import TechStack from "./TechStack";
// import NavMenu from "./NavMenu";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <TechStack />
      <WorkExperience />
      <ProjectsSection />
      <Education />
      <ContactMe />
    </>
  );
};

export default MainPage;
