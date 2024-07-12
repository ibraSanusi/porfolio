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
    <section className="flex flex-row mt-16">
      <div className="xl:max-w-[394px] xl:max-h-[383px] w-full h-full flex flex-col gap-8">
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

      <div className="relative xl:w-[583.03px] xl:h-[300.46px] w-full h-full">
        <Image
          className="absolute -top-[117px] left-[116px] rounded-2xl -rotate-[15.99deg] z-40"
          src={'/images/recomiend-app-landing-vertical.png'}
          alt="Imagen del landing de recomiend.app"
          width={275}
          height={0}
        />
        <Image
          className="absolute -top-[160px] left-[241px] rounded-2xl"
          src={'/images/recomiend-app-upload-image.png'}
          alt="Imagen de la subida de imagen de recomiend.app"
          width={275}
          height={0}
        />
        <Image
          className="absolute -top-[34px] left-[332px] rounded-2xl rotate-[17.99deg] z-50"
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
