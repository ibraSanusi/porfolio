'use client'

import React, { useEffect, useState } from 'react'
import ButtonCopyClipboard from '@lib/components/home/ButtonCopyClipboard'
import Gmail from '@lib/svg/Gmail'

import { MouseEventHandler } from 'react'
import clsx from 'clsx'
import CopyIcon from '@lib/svg/CopyIcon'
import CloseIcon from '@lib/svg/CloseIcon'

interface Props {
  buttonValue: string
  buttonTextContent: string
}

export default function CopyClipboard({
  buttonValue,
  buttonTextContent,
}: Props) {
  const [showToast, setShowToast] = useState(false)

  const copyClipboard: MouseEventHandler<HTMLButtonElement> = (e) => {
    const emailValue = e.currentTarget.value ?? ''
    navigator.clipboard.writeText(emailValue)

    setShowToast(true)
  }

  const closeToast = () => {
    console.log('cerrando...')
    setShowToast(false)
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showToast])
  return (
    <>
      <ButtonCopyClipboard onClick={copyClipboard} value={buttonValue}>
        <Gmail className="size-[22px]" />
        <span>{buttonTextContent}</span>
      </ButtonCopyClipboard>

      {
        <div
          id="toast-default"
          className={clsx(
            'items-center w-full max-w-xs p-4 text-gray-500 rounded-lg shadow dark:text-gray-400 bg-white fixed right-12 top-12 container scroll-m-[204px]',
            {
              'flex .': showToast,
              'hidden .': !showToast,
            }
          )}
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-principal rounded-lg bg-secondary">
            <CopyIcon />
            <span className="sr-only">Fire icon</span>
          </div>
          <div className="ms-3 text-sm font-bold text-black">Email copied!</div>
          {/* <button
            onClick={closeToast}
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-blue-400 text-white hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <CloseIcon />
          </button> */}
        </div>
      }
    </>
  )
}
