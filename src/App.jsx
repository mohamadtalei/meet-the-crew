import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import StudioIntro from './components/StudioIntro.jsx'
import TeamSection from './components/TeamSection.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        {/* <StudioIntro /> */}
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
