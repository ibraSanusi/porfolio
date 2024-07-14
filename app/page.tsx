'use client'

import Hero from '@lib/components/home/sections/Hero'
import Experience from '@lib/components/home/sections/Experience'
import Projects from '@lib/components/home/sections/Projects'
import About from '@lib/components/home/sections/About'
import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import { useHeader } from '@lib/hooks/useHeader'

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([])
  const headerRef = useHeader()

  const options = {
    root: null,
    rootMargin: '-350px',
    threshold: 0.4,
  }

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!headerRef?.current) return

        const header = headerRef.current

        const navLinks = header.querySelectorAll('nav a')
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            header.classList.add('headerBlur')
            link.classList.add('headerIntersected')
          } else {
            header.classList.add('headerBlur')
            link.classList.remove('headerIntersected')
          }
        })
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    sectionsRef.current.forEach((sectionRef) => {
      observer.observe(sectionRef)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <>
      <main>
        <div className="space-y-28">
          <SectionContainer ref={addSectionRef} id="hero">
            <Hero />
          </SectionContainer>
          <SectionContainer
            ref={addSectionRef}
            className="flex flex-col gap-20 container scroll-m-[204px]"
            id="experience"
          >
            <Experience />
          </SectionContainer>
          <SectionContainer ref={addSectionRef} id="projects">
            <Projects />
          </SectionContainer>
          <SectionContainer
            ref={addSectionRef}
            className="flex flex-row mb-28 gap-24"
            id="about"
          >
            <About />
          </SectionContainer>
        </div>
      </main>
    </>
  )
}

const SectionContainer = React.forwardRef<
  HTMLElement,
  ComponentProps<'section'>
>(({ id, children, className, ...props }, ref) => (
  <section
    id={id}
    data-section={id}
    ref={ref}
    className={`container scroll-m-[204px] ${className}`}
    {...props}
  >
    {children}
  </section>
))

SectionContainer.displayName = 'SectionContainer'
