import Image from 'next/image'
import { bungeeInline, bungeeOutline } from '@lib/fonts'
import Github from '@lib/svg/Github'
import LinkedIn from '@lib/svg/LinkedIn'
import Gmail from '@lib/svg/Gmail'
import LinkCustom from '../Button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="flex flex-row gap-20 items-center">
      <div className="flex flex-col max-w-[600px] gap-6">
        <h1
          className={`text-8xl text-secondary font-bold ${bungeeOutline.className}`}
        >
          HOLA SOY, <span className={`${bungeeInline.className}`}>IBRA</span>
        </h1>

        <p className="w-full text-pretty">
          Desarrollador frontend 😉. Capaz de resolver problemas y con ganas de
          aprender lo que no se todavía. Nextjs, Reactjs, tRPC, Tailwind y
          Prisma son mis últimas tecnologías utilizadas.
        </p>

        <div className="flex flex-row gap-4">
          <Link target="_blank" href={'https://github.com/ibraSanusi'}>
            <Github className="size-[42px] hover:text-secondary hover:scale-105 hover:cursor-pointer transition-transform" />
          </Link>
          <Link
            target="_blank"
            href={
              'https://www.linkedin.com/in/ibrahim-ayodeji-sanusi-0208112a7/'
            }
          >
            <LinkedIn className="w-[39px] h-[40px] hover:text-secondary hover:scale-105 hover:cursor-pointer transition-transform" />
          </Link>

          <LinkCustom href={''}>
            <Gmail className="size-[22px]" />
            <span>Contáctame</span>
          </LinkCustom>
        </div>
      </div>

      <Image
        src={'/images/ibra_timido.jpg'}
        width={300}
        height={448}
        alt="Imagen de la seccion hero"
      />
    </section>
  )
}
