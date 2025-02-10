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
        ¡Hola! Soy Ibra, desarrollador frontend con un fuerte interés en el
        backend. Actualmente, estoy trabajando con Next.js y React.js para dar
        vida a mis proyectos, y cuando exploro el backend, utilizo tecnologías
        como NextAuth, Prisma ORM y Vercel para la autenticación, gestión de
        datos y despliegue. Actualmente, estoy en búsqueda de nuevas
        oportunidades profesionales y sigo ampliando mis conocimientos mediante
        proyectos personales donde aplico buenas prácticas, principios SOLID y
        testing. Me apasiona construir soluciones eficientes y escalables, y
        siempre estoy aprendiendo para mejorar como desarrollador.
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
