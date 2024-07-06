import type { ComponentProps, FC } from 'react'

const Github: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.336 2.247c-5.525 0-10 4.475-10 10a9.994 9.994 0 006.838 9.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175-.112-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.012-.662.787-.013 1.35.725 1.537 1.025.9 1.512 2.338 1.087 2.913.825.087-.65.35-1.088.637-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.388-1.988 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .838-.262 2.75 1.025.8-.225 1.65-.337 2.5-.337.85 0 1.7.112 2.5.337 1.913-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.638.7 1.025 1.588 1.025 2.688 0 3.837-2.337 4.687-4.562 4.937.362.313.675.913.675 1.85 0 1.338-.013 2.413-.013 2.75 0 .263.188.575.688.475a10.016 10.016 0 006.812-9.487c0-5.525-4.475-10-10-10z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Github
