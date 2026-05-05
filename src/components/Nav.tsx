'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>
        <div className={styles.logoWrap}>
          <Image
            src="/assets/logo.jpeg"
            alt="Sommelier Marc — Rare Wines"
            width={140}
            height={44}
            className={styles.logo}
            priority
          />
        </div>
        <span className={styles.brandSub}>Rare Wines · Curadoria Privada</span>
      </div>

      <a href="#acesso" className={styles.cta}>
        Solicitar acesso
      </a>
    </nav>
  )
}
