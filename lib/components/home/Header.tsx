'use client'

import { useHeader } from '@lib/hooks/useHeader'
import Link from 'next/link'
import { ComponentProps, FC, useEffect } from 'react'

export default function Header() {
  const headerRef = useHeader()

  useEffect(() => {
    if (headerRef?.current) {
      console.log('Header reference:', headerRef.current)
    }
  }, [headerRef])

  return (
    <header
      ref={headerRef}
      className="w-full flex p-8 fixed top-0 left-0 z-[999]"
    >
      <nav className="flex flex-row items-center gap-20 py-2 px-4 rounded-[50px] m-auto bg-opacity-50 bg-[#D9D9D9]">
        <NavLink href={'#hero'}>Inicio</NavLink>
        <NavLink href={'#experience'}>Experiencia</NavLink>
        <NavLink href={'#projects'}>Proyectos</NavLink>
        <NavLink href={'#about'}>Sobre mí</NavLink>
        <NavLink href={'mailto:ibra.sanusi.ayo@gmail.com'}>Contacto</NavLink>
      </nav>
      {/* <div className="flex items-center flex-row gap-4">
        <Link href={'https://github.com/ibraSanusi'} target="_blank">
          <Github className="size-12" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/ibrahim-ayodeji-sanusi-0208112a7/'}
          target="_blank"
        >
          <LinkedIn className="size-10" />
        </Link>
      </div> */}
    </header>
  )
}

const NavLink: FC<ComponentProps<typeof Link>> = ({
  href,
  children,
  ...props
}) => (
  <Link
    className="rounded-full hover:bg-secondary hover:text-principal box-border py-2 px-4 text-sm font-bold"
    {...props}
    href={href}
  >
    {children}
  </Link>
)
