import Image from 'next/image'
import { bebasNeue } from '@lib/fonts'

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-row justify-center gap-20">
      <div className="flex flex-col max-w-[600px] gap-6">
        <h1
          className={`text-8xl text-secondary font-bold ${bebasNeue.className}`}
        >
          Desarrollador Front End
        </h1>
        <p className="w-full text-pretty">
          Hey! Soy Ibra, desarrollador frontend, pero le tengo algo de cariño al
          backend. Actualmente estoy desarrollando con tecnologías como Nextjs y
          Reactjs para darle forma a mis proyectos. Como mencioné antes me gusta
          tocar cosas de backend y para ello empleo tecnologías como otra vez
          Nextjs, NextAuth, Prisma ORM y Vercel para desplegar. Actualmente
          estoy desempleado pero con muchas ganas de aportar profesionalmente;
          por ello creo proyectos personales en los cuales en los que intento
          emplear metodologías que se suelen utilizar en empresa o equipos de
          trabajo, como buenas prácticas, principio SOLID, Testing, etc...{' '}
        </p>
      </div>
      <Image
        className=""
        src={'/images/ibra.jpg'}
        width={300}
        height={0}
        alt="Imagen de la seccion hero"
      />
    </section>
  )
}
