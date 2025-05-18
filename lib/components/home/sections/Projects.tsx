import { ComponentProps, FC, Fragment } from 'react'
import Image from 'next/image'
import { bungeeInline } from '@lib/fonts'
import LinkCustom from '../LinkCustom'
import LinkIcon from '@lib/svg/LinkIcon'
import Link from 'next/link'
import Github from '@lib/svg/Github'
import { ListOfProjects } from '@lib/objects'

const Proyects: FC = () => {
  return (
    <section className="flex flex-col gap-36">
      {ListOfProjects.map((project, index) => (
        <article key={index} className="flex flex-col xl:flex-row gap-8 mt-16">
          <div className="lg:max-w-[394px] lg:max-h-[383px] w-full h-full flex flex-col gap-8">
            <h3 className="font-bold text-[26px] leading-8 space-x-2">
              {project.title}
            </h3>
            <p>{project.description}</p>

            <div className="flex flex-row gap-4">
              <LinkCustom className="" href={project.href}>
                <LinkIcon className="size-6" />
                <span>Mostrar</span>
              </LinkCustom>

              {project.isGithub && project.gitHubUrl && (
                <Link target="_blank" href={project.gitHubUrl}>
                  <Github className="size-[42px] hover:text-secondary hover:scale-105 hover:cursor-pointer transition-transform" />
                </Link>
              )}
            </div>
          </div>

          <div className="m-auto xl:m-0 overflow-auto max-w-[275px] xl:overflow-visible flex flex-row gap-8 xl:relative  xl:h-[300.46px] xl:w-full h-full order-first xl:order-last">
            {project.images.map((src, i) => (
              <Image
                key={i}
                className={`xl:absolute xl:w-[275px] rounded-2xl ${
                  i === 0
                    ? 'xl:-top-[117px] xl:left-[116px] xl:-rotate-[15.99deg] xl:z-40'
                    : i === 1
                    ? 'xl:-top-[160px] xl:left-[241px]'
                    : 'xl:-top-[34px] xl:left-[332px] xl:rotate-[17.99deg] xl:z-50'
                }`}
                src={src}
                alt={`Imagen ${i + 1} de ${project.title}`}
                width={275}
                height={0}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}

const Projects: FC<ComponentProps<typeof Fragment>> = () => (
  <>
    <h2 className={`${bungeeInline.className} text-secondary text-5xl`}>
      Proyectos
    </h2>
    <Proyects />
  </>
)

export default Projects
