import { bungeeInline, bungeeOutline } from '@lib/fonts'
import Image from 'next/image'
import { ComponentProps, FC } from 'react'

const About: FC<ComponentProps<'section'>> = () => (
  <section className="mt-[240px] ml-[230px] flex flex-row mb-28 gap-24">
    <section className="xl:max-w-[600.22px] xl:max-h-[401px]">
      <h2 className={`${bungeeInline.className} text-secondary text-5xl`}>
        Sobre mi
      </h2>
      <h3
        className={`${bungeeOutline.className} text-secondary mt-4 text-3xl xl:max-w-80`}
      >
        Desarrollador front end
      </h3>
      <p className="mt-6">
        Hey! Soy Ibra, desarrollador frontend, pero le tengo algo de cariño al
        backend. Actualmente estoy desarrollando con tecnologías como Nextjs y
        Reactjs para darle forma a mis proyectos. Como mencioné antes me gusta
        tocar cosas de backend y para ello empleo tecnologías como Nextjs, otra
        vez, NextAuth, Prisma ORM y Vercel para desplegar. Actualmente estoy
        desempleado pero con muchas ganas de aportar profesionalmente; por ello
        creo proyectos personales en los cuales en los que intento emplear
        metodologías que se suelen utilizar en empresa o equipos de trabajo,
        como buenas prácticas, principio SOLID, Testing, etc...
      </p>
    </section>
    <Image
      className=""
      src={'/images/ibra_vouge.jpg'}
      alt="Imagen del landing de recomiend.app"
      width={294}
      height={0}
    />
  </section>
)

export default About
