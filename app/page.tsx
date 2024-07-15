import Hero from '@lib/components/home/sections/Hero'
import Experience from '@lib/components/home/sections/Experience'
import Projects from '@lib/components/home/sections/Projects'
import About from '@lib/components/home/sections/About'
import SectionContainer from '@lib/components/home/SectionContainer'

export default function Home() {
  return (
    <>
      <main>
        <div className="space-y-28">
          <SectionContainer id="hero">
            <Hero />
          </SectionContainer>
          <SectionContainer
            id="experience"
            className="flex flex-col gap-20 container scroll-m-[204px]"
          >
            <Experience />
          </SectionContainer>
          <SectionContainer id="projects">
            <Projects />
          </SectionContainer>
          <SectionContainer id="about" className="flex flex-row mb-28 gap-24">
            <About />
          </SectionContainer>
        </div>
      </main>
    </>
  )
}
