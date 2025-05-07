import { Banner } from "../components/Banner"
import { AboutSection } from "../components/AboutSection"
import { PetsList } from "../components/PetsList"
import { ONGsSection } from "../components/ONGsSection"
import { Contact } from "../components/Contact"



export const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <PetsList />
      <ONGsSection />
      <Contact />
    </div>
  )
}
