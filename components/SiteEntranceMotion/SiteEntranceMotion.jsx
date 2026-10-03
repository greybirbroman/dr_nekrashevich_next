'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

const SiteEntranceMotion = () => {
  useEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const revealTweens = []
      const targets = document.querySelectorAll('[data-motion-reveal]')

      gsap.fromTo(
        '[data-motion="hero-image"]',
        { opacity: 0, scale: 1.025 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power2.out',
        },
      )
      gsap.fromTo(
        '[data-motion="hero-copy"]',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          delay: 0.1,
          duration: 0.7,
          ease: 'power2.out',
        },
      )

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            const tween = gsap.fromTo(
              entry.target,
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              },
            )
            revealTweens.push(tween)
            observer.unobserve(entry.target)
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
      )

      targets.forEach((target) => observer.observe(target))

      return () => {
        observer.disconnect()
        revealTweens.forEach((tween) => tween.revert())
      }
    })

    return () => media.revert()
  }, [])

  return null
}

export default SiteEntranceMotion
