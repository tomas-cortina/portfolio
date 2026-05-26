import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Experience from "./components/home/experience"
import Studies from "./components/home/studies"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <Studies/>
      <Divider/>
      <Experience/>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
    </main>
  )
}

export default page
