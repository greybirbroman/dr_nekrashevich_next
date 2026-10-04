'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export const useNavigationMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)

  const closeMenu = useCallback(() => setIsMenuVisible(false), [])
  const openMenu = useCallback(() => setIsMenuVisible(true), [])

  useEffect(() => {
    if (!isMenuVisible) return

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) closeMenu()
    }

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      closeMenu()
      triggerRef.current?.focus()
    }

    const handleResize = () => {
      if (window.matchMedia('(min-width: 80rem)').matches) closeMenu()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [closeMenu, isMenuVisible])

  return {
    menuRef,
    triggerRef,
    isMenuVisible,
    closeMenu,
    openMenu,
  }
}
