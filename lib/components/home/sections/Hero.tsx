import Image from 'next/image'
import { bungeeInline, bungeeOutline } from '@lib/fonts'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-row justify-center gap-20 items-center mt-[72px]"
    >
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
