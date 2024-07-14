import { HeaderContext } from '@lib/contexts/HeaderContext'
import { useContext } from 'react'

export const useHeader = () => useContext(HeaderContext)
