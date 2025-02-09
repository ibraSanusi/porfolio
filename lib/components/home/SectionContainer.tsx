'use client'

import { useHeader } from '@lib/hooks/useHeader'
import React, { ReactNode, useEffect, useRef } from 'react'

interface Props {
  id: string | undefined
  className?: string | undefined
  children: ReactNode
}

export default function SectionContainer({
  id,
  children,
  className,
  ...props
}: Props) {
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

  // Marca la seccion de la pagina que se esta viendo en el header
  // Si se esta en proyectos se remarca proyectos en el header
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
    <section
      id={id}
      data-section={id}
      ref={addSectionRef}
      className={`container ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
