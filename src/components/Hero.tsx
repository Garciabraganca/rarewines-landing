import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background image from /public/assets */}
      <div className={styles.imageWrap}>
        <Image
          src="/assets/hero.jpg"
          alt="Composição de garrafas raras — curadoria privada Sommelier Marc"
          fill
          priority
          quality={90}
          className={styles.image}
        />
      </div>

      {/* Overlays for legibility */}
      <div className={styles.overlayLeft} />
      <div className={styles.overlayBottom} />

      {/* Decorative vertical line */}
      <div className={styles.vline} />

      {/* Content */}
      <div className={styles.content}>
        <p className={`${styles.eyebrow} section-eyebrow`}>
          Curadoria Privada · Acesso Reservado
        </p>

        <h1 className={styles.title}>
          Vinhos que o tempo<br />
          <em className={styles.titleItalic}>não repõe.</em>
        </h1>

        <p className={styles.subtitle}>
          Safras icônicas, rótulos colecionáveis e experiências conduzidas por
          sommelier — disponíveis para clientes que valorizam procedência,
          discrição e curadoria de alto padrão.
        </p>

        <div className={styles.actions}>
          <a href="#acesso" className="btn-primary">
            Solicitar acesso à seleção
          </a>
          <a href="#experience" className="btn-ghost">
            Sommelier Experience
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLabel}>Explorar</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
