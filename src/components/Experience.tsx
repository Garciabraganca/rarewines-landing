import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience">

      {/* ── Video background ── */}
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/assets/sommelier-experience-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className={styles.overlayBase} />
      <div className={styles.overlayGradient} />

      {/* ── Content ── */}
      <div className={`${styles.inner} reveal`}>
        <p className="section-eyebrow" style={{ justifyContent: 'center' }}>
          Evento reservado
        </p>

        <h2 className={styles.title}>
          Sommelier<br />
          <em className={styles.em}>Experience.</em>
        </h2>

        <p className={styles.body}>
          Jantares e encontros harmonizados com curadoria de vinhos, gastronomia
          de alto nível e condução de sommelier para grupos privados seletos. Uma
          experiência construída sobre silêncio, procedência e o prazer genuíno
          de partilhar grandes rótulos.
        </p>

        <a href="#acesso" className="btn-ghost">
          Consultar disponibilidade
        </a>
      </div>
    </section>
  )
}
