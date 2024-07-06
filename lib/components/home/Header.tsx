import Github from '@lib/svg/Github'
import LinkedIn from '@lib/svg/LinkedIn'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between p-16">
      <Image src={''} width={127} height={48} alt="Logo Ibra" />
      <nav className="flex flex-row items-center gap-16 text-lg font-semibold">
        <Link href={'#hero'}>Inicio</Link>
        <Link href={'#experience'}>Experiencia</Link>
        <Link href={'#projects'}>Proyectos</Link>
        <Link href={'#about'}>Sobre mí</Link>
        <Link href={'#contact'}>Contacto</Link>
      </nav>
      <div className="flex items-center flex-row gap-4">
        <Github className="size-12" />
        <LinkedIn className="size-10" />
      </div>
    </header>
  )
}
