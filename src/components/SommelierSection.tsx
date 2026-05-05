import Image from 'next/image'
import styles from './SommelierSection.module.css'

const bullets = [
  'Curadoria de rótulos raros e colecionáveis',
  'Atendimento privado e consultivo',
  'Experiências Sommelier Experience para grupos seletos',
  'Seleção com foco em procedência, ocasião e perfil do cliente',
]

export default function SommelierSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Image column ── */}
        <div className={`${styles.imageCol} reveal`}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/marco.png"
              alt="Marco Ferreira — Sommelier RareWines"
              fill
              quality={85}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Text column ── */}
        <div className={`${styles.textCol} reveal reveal-delay-2`}>
          <p className="section-eyebrow">Sommelier &amp; Curadoria Privada</p>

          <h2 className={styles.title}>
            Conheça<br />
            <em className={styles.em}>Marco Ferreira.</em>
          </h2>

          <div className={styles.body}>
            <p>
              Com passagem pelo renomado <em className={styles.bodyEm}>Hotel Fasano</em>,
              Marco Ferreira construiu sua trajetória nos ambientes mais exigentes
              da alta gastronomia e hospitalidade de luxo — onde o padrão de
              procedência e a experiência sensorial são inegociáveis.
            </p>
            <p>
              À frente da curadoria RareWines, conduz uma seleção privada de
              rótulos raros, safras icônicas e experiências exclusivas para clientes
              que valorizam discrição, atendimento consultivo e acesso privilegiado
              ao universo dos grandes vinhos.
            </p>
            <p>
              Cada cliente recebe orientação personalizada — seja para aquisição de
              garrafas especiais, formação de adega, presentes de alto padrão ou
              experiências privadas conduzidas por sommelier. Uma jornada segura,
              elegante e sob medida.
            </p>
          </div>

          <ul className={styles.bullets}>
            {bullets.map(b => (
              <li key={b} className={styles.bullet}>
                <span className={styles.bulletDot} aria-hidden />
                {b}
              </li>
            ))}
          </ul>

          <a href="#acesso" className={`btn-primary ${styles.cta}`}>
            Solicitar curadoria privada
          </a>
        </div>

      </div>
    </section>
  )
}
