import Header from '@lib/components/home/Header'
import HeroSection from '@lib/components/home/HeroSection'
import ExperienceSection from '@lib/components/home/ExperienceSection'
import Link from 'next/link'
import Arrow from '@lib/svg/Arrow'
import Image from 'next/image'
import { Rosarivo } from 'next/font/google'

const font = Rosarivo({ subsets: ['latin'], weight: ['400'] })

const projects = [
  {
    name: 'Recomiend.app',
    description:
      'Prueba estos ajustes y verifica si el problema persiste. Si encuentras errores específicos en la consola o más asistencia, proporciona detalles adicionales para una mejor ayuda.',
    thumbnailUrl: '/images/recomiend-app-landing-vertical.png',
    altText: 'Foto de la landing',
    imgRotation: '-rotate-6',
  },
  {
    name: 'Recomiend.app',
    description:
      'Prueba estos ajustes y verifica si el problema persiste. Si encuentras errores específicos en la consola o más asistencia, proporciona detalles adicionales para una mejor ayuda.',
    thumbnailUrl: '/images/recomiend-app-upload-image.png',
    altText: 'Foto de la landing',
    imgRotation: 'rotate-6',
  },
  {
    name: 'Recomiend.app',
    description:
      'Prueba estos ajustes y verifica si el problema persiste. Si encuentras errores específicos en la consola o más asistencia, proporciona detalles adicionales para una mejor ayuda.',
    thumbnailUrl: '/images/recomiend-app-score.png',
    altText: 'Foto de la landing',
    imgRotation: '-rotate-3',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <ExperienceSection className="m-auto mt-28 xl:max-w-[800px]" />

      {/* TODO: Mostrar 3 proyectos buenos.
        Mostrar el restante en otra pagina */}
      <section className="w-full xl:min-h-[700px] flex flex-row gap-20 relative h-full">
        {projects.map((project, index) => (
          <article
            key={index}
            className="xl:min-h-[767.25px] flex flex-col justify-between h-full"
          >
            <div className="xl:w-fit relative">
              <Image
                className={`${project.imgRotation} rounded-2xl`}
                width={450}
                height={0}
                src={project.thumbnailUrl}
                alt={project.altText}
              />
              {/* Numero */}
              <span
                className={`${font.className} ${project.imgRotation} absolute text-[400px] left-16 -bottom-[247px] h-fit z-50 text-black font-extrabold`}
              >
                {index + 1}
              </span>
            </div>
            <p className="xl:max-w-[500px] text-balance z-50">
              {project.description}
            </p>
          </article>
        ))}
      </section>

      <p>Footer</p>
    </>
  )
}
