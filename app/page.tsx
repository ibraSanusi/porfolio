import Header from '@lib/components/home/Header'
import HeroSection from '@lib/components/home/HeroSection'
import ExperienceSection from '@lib/components/home/ExperienceSection'
import Link from 'next/link'
import Arrow from '@lib/svg/Arrow'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <main className="m-auto mt-28 xl:max-w-[800px]">
        <ExperienceSection />
        {/* TODO: Mostrar 3 proyectos buenos.
        Mostrar el restante en otra pagina */}
        <section>
          <div className="max-w-[499.19px] max-h-[211.19px] min-w-[499.19px] min-h-[211.19px] link-card relative p-8 flex flex-col gap-6 justify-between">
            <h4 className="text-2xl font-bold">Hola mundo</h4>
            <div className="flex gap-4">
              <span>Nextjs</span>
              <span>React</span>
            </div>
            <Link
              className="absolute bottom-0 right-0 w-24 h-12 bg-ternary rounded-[16px] flex items-center justify-center hover:bg-[#edffdf] text-white hover:text-black"
              href={''}
            >
              <Arrow className="size-6" />
            </Link>
          </div>
        </section>
      </main>

      <p>Footer</p>
    </>
  )
}
