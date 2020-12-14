import {useLayoutEffect, useState} from 'react'
import {Breakpoint} from '~/types/constEnums'
import useBreakpoint from './useBreakpoint'

const useExpandColumnWidth = (reflectPromptsCount: number): [boolean, () => void] => {
  const [isWidthExpanded, setIsWidthExpanded] = useState(false)
  const isDesktop = useBreakpoint(Breakpoint.SIDEBAR_LEFT)
  const isWiderScreen = useBreakpoint(Breakpoint.WIDER_SCREEN)

  useLayoutEffect(() => {
    const expandWidth =
      (reflectPromptsCount === 1 && isDesktop) || (reflectPromptsCount === 2 && isWiderScreen)
    if (isWidthExpanded !== expandWidth) {
      setIsWidthExpanded(!isWidthExpanded)
    }
  }, [isDesktop, isWiderScreen])

  const toggleWidth = () => {
    setIsWidthExpanded(!isWidthExpanded)
  }

  return [isWidthExpanded, toggleWidth]
}

export default useExpandColumnWidth
