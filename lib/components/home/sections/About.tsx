import { bungeeInline, bungeeOutline } from '@lib/fonts'
import Image from 'next/image'
import { ComponentProps, FC } from 'react'

const About: FC<ComponentProps<'section'>> = () => (
  <>
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
        ¡Hola! Soy Ibra, desarrollador frontend con experiencia en React.js y
        Next.js. Me apasiona crear interfaces modernas, funcionales y
        accesibles, cuidando tanto la experiencia del usuario como la calidad
        del código. Aunque mi enfoque principal es el frontend, también tengo
        interés en el backend y he explorado herramientas como Prisma ORM,
        NextAuth y el despliegue con Vercel para complementar mis proyectos.
        Actualmente estoy buscando nuevas oportunidades profesionales donde
        pueda seguir creciendo como desarrollador. En mis proyectos personales
        practico buenas prácticas, diseño limpio, testing y componentes
        reutilizables para mejorar continuamente mis habilidades.
      </p>
    </section>
    <Image
      className="m-auto xl:m-0 rounded-xl"
      src={'/images/ibra_vouge.jpg'}
      alt="Imagen del landing de recomiend.app"
      width={294}
      height={0}
    />
  </>
)

export default About
