import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
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
