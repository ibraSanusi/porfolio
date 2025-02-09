import { ComponentProps, FC } from 'react'

interface BarsProps {}

const Bars: FC<ComponentProps<'svg'>> = () => (
  <svg
    className="w-12 h-12 text-gray-800 dark:text-white md:hidden flex bg-white/30 backdrop-blur-sm rounded-xl"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      d="M5 7h14M5 12h14M5 17h14"
    />
  </svg>
)

export default Bars
