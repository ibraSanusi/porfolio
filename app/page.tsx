import Header from '@lib/components/home/Header'
import Hero from '@lib/components/home/sections/Hero'
import Experience from '@lib/components/home/sections/Experience'
import { Rosarivo } from 'next/font/google'
import Projects from '@lib/components/home/sections/Projects'
import About from '@lib/components/home/sections/About'

const font = Rosarivo({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </>
  )
}
