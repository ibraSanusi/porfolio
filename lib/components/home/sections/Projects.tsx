import { ComponentProps, FC, Fragment } from 'react'
import Image from 'next/image'
import { bungeeInline } from '@lib/fonts'
import LinkCustom from '../LinkCustom'
import LinkIcon from '@lib/svg/LinkIcon'

const Projects: FC<ComponentProps<typeof Fragment>> = () => (
  <>
    <h2 className={`${bungeeInline.className} text-secondary text-5xl`}>
      Proyectos
    </h2>
    <section className="flex flex-col xl:flex-row gap-8 mt-16">
      <div className="lg:max-w-[394px] lg:max-h-[383px] w-full h-full flex flex-col gap-8">
        <h3 className="font-bold text-[26px] leading-8 space-x-2">
          Photo Scorer - Analiza y mejora tus fotos
        </h3>
        <p>
          Servicio ofrecido por la startup Recomiend.app. Tras subir tu foto de
          perfil recibes un feedback de la IA para mejorar tu foto.
        </p>
        <LinkCustom
          className=""
          href={'https://recomiend.app/analizador-foto-perfil-ia'}
        >
          <LinkIcon className="size-6" />
          <span>Mostrar</span>
        </LinkCustom>
      </div>

      <div className="m-auto xl:m-0 overflow-auto max-w-[275px] xl:overflow-visible flex flex-row gap-8 xl:relative  xl:h-[300.46px] xl:w-full h-full order-first xl:order-last">
        <Image
          className="xl:absolute xl:-top-[117px] xl:left-[116px] xl:w-[275px] rounded-2xl xl:-rotate-[15.99deg] xl:z-40"
          src={'/images/recomiend-app-landing-vertical.png'}
          alt="Imagen del landing de recomiend.app"
          width={275}
          height={0}
        />
        <Image
          className="xl:absolute xl:-top-[160px] xl:left-[241px] xl:w-[275px] rounded-2xl"
          src={'/images/recomiend-app-upload-image.png'}
          alt="Imagen de la subida de imagen de recomiend.app"
          width={275}
          height={0}
        />
        <Image
          className="xl:absolute xl:-top-[34px] xl:left-[332px] xl:w-[275px] rounded-2xl xl:rotate-[17.99deg] xl:z-50"
          src={'/images/recomiend-app-score.png'}
          alt="Imagen de los resultados de recomiend.app"
          width={275}
          height={0}
        />
      </div>
    </section>
  </>
)

export default Projects
