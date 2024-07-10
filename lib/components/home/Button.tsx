import Link from 'next/link'
import { ComponentProps, FC } from 'react'

interface LinkWraperProps {}

const LinkCustom: FC<ComponentProps<typeof Link>> = ({
  children,
  className,
  ...props
}) => (
  <Link
    className={`py-[8px] px-[11px] flex hover:bg-secondary hover:scale-105 flex-row gap-2 items-center bg-white rounded-[5px] text-[#386641] hover:text-black hover:cursor-pointer transition-transform font-bold w-fit ${className}`}
    target="_blank"
    {...props}
  >
    {children}
  </Link>
)

export default LinkCustom
