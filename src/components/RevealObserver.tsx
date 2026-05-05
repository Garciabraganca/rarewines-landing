'use client'

import { useEffect } from 'react'

/**
 * Mounts a single IntersectionObserver that adds `.visible` to any
 * element with the `.reveal` class — triggering the CSS fade-up animation.
 *
 * Attach this once in the root layout or page.
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
