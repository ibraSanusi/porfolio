import { ComponentProps, FC } from 'react'

const ButtonCopyClipboard: FC<ComponentProps<'button'>> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={`py-[8px] px-[11px] flex hover:bg-secondary hover:scale-105 flex-row gap-2 items-center bg-white rounded-[5px] text-[#386641] hover:text-black hover:cursor-pointer transition-transform font-bold w-fit ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default ButtonCopyClipboard
