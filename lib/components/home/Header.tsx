'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { useHeader } from '@lib/hooks/useHeader'
import Bars from '@lib/svg/Bars'
import Link from 'next/link'
import CloseIcon from '@lib/svg/CloseIcon'

export default function Header() {
  const headerRef = useHeader()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const bodyRef = useRef(typeof document !== 'undefined' ? document.body : null)

  useEffect(() => {
    if (headerRef?.current) {
      console.log('Header reference:', headerRef.current)
    }
  }, [headerRef])

  useEffect(() => {
    if (bodyRef.current) {
      if (isMenuOpen) {
        bodyRef.current.classList.add('overflow-hidden')
      } else {
        bodyRef.current.classList.remove('overflow-hidden')
      }
    }
  }, [isMenuOpen])

  return (
    <header
      ref={headerRef}
      className="w-full flex xl:p-8 pl-4 pt-10 fixed top-4 left-4 z-50"
    >
      {/* Icono del menu para el movil */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
        {!isMenuOpen && <Bars />}
      </button>

      {/* Menú móvil */}
      <div
        className={`fixed w-9/12 left-0 top-0 h-full bg-principal shadow-xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Icono close del menu movil */}
        <div className="w-full flex justify-end p-8">
          <button onClick={() => setIsMenuOpen(false)}>
            <CloseIcon className="hover:text-secondary hover:scale-125 w-4 h-4" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-white">
          <NavLink
            onClick={() => {
              setIsMenuOpen(false)
            }}
            className="hover:text-secondary scale-110 p-2"
            href={'#hero'}
          >
            Inicio
          </NavLink>
          <NavLink
            onClick={() => {
              setIsMenuOpen(false)
            }}
            className="hover:text-secondary scale-110 p-2"
            href={'#experience'}
          >
            Experiencia
          </NavLink>
          <NavLink
            onClick={() => {
              setIsMenuOpen(false)
            }}
            className="hover:text-secondary scale-110 p-2"
            href={'#projects'}
          >
            Proyectos
          </NavLink>
          <NavLink
            onClick={() => {
              setIsMenuOpen(false)
            }}
            className="hover:text-secondary scale-110 p-2"
            href={'#about'}
          >
            Sobre mí
          </NavLink>
          <NavLink
            onClick={() => {
              setIsMenuOpen(false)
            }}
            className="hover:text-secondary scale-110 p-2"
            href={'mailto:ibra.sanusi.ayo@gmail.com'}
          >
            Contacto
          </NavLink>
        </nav>
      </div>

      {/* Menú desktop */}
      <nav className="hidden md:flex md:flex-row items-center gap-10 py-2 px-4 rounded-full m-auto bg-opacity-50 bg-gray-300">
        <NavLink href={'#hero'}>Inicio</NavLink>
        <NavLink href={'#experience'}>Experiencia</NavLink>
        <NavLink href={'#projects'}>Proyectos</NavLink>
        <NavLink href={'#about'}>Sobre mí</NavLink>
        <NavLink href={'mailto:ibra.sanusi.ayo@gmail.com'}>Contacto</NavLink>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

const NavLink = ({
  href,
  children,
  onClick,
  className = 'rounded-full hover:bg-secondary hover:text-principal box-border py-2 px-4 text-sm font-bold',
  ...props
}: NavLinkProps) => (
  <Link
    onClick={onClick && onClick}
    className={`${className.trim()}`}
    {...props}
    href={href}
  >
    {children}
  </Link>
)
