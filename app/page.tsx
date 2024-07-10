import Header from '@lib/components/home/Header'
import Hero from '@lib/components/home/sections/Hero'
import Experience from '@lib/components/home/sections/Experience'
import { Rosarivo } from 'next/font/google'
import Projects from '@lib/components/home/sections/Projects'
import About from '@lib/components/home/sections/About'
import { ComponentProps, FC } from 'react'

const font = Rosarivo({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <>
      <main>
        <div className="space-y-28">
          <SectionContainer id="hero">
            <Hero />
          </SectionContainer>
          <SectionContainer
            className="flex flex-col gap-20 container scroll-m-[204px]"
            id="experience"
          >
            <Experience />
          </SectionContainer>
          <SectionContainer id="projects">
            <Projects />
          </SectionContainer>
          <SectionContainer className="flex flex-row mb-28 gap-24" id="about">
            <About />
          </SectionContainer>
        </div>
      </main>
    </>
  )
}

const SectionContainer: FC<ComponentProps<'section'>> = ({
  id,
  children,
  ...props
}) => (
  <section
    id={id}
    data-section={id}
    className="container scroll-m-[204px]"
    {...props}
  >
    {children}
  </section>
)
