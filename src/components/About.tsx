import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.grid}>

        {/* Left — title + image */}
        <div className={`${styles.left} reveal`}>
          <p className="section-eyebrow">Operação privada</p>
          <h2 className={styles.title}>
            Curadoria construída<br />
            sobre <em className={styles.em}>procedência<br />e confiança.</em>
          </h2>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/bottles-group.jpg"
              alt="Seleção de garrafas raras — portfólio Sommelier Marc"
              fill
              quality={80}
              className={styles.image}
              loading="lazy"
            />
            <span className={styles.caption}>Portfólio · Bordeaux</span>
          </div>
        </div>

        {/* Right — body text + stats */}
        <div className={`${styles.right} reveal reveal-delay-2`}>
          <div className={styles.body}>
            <p>
              Somos especializados na intermediação de rótulos raros e altamente
              colecionáveis, conectando clientes exigentes às melhores
              oportunidades do mercado internacional.
            </p>
            <p>
              Trabalhamos com safras icônicas, edições limitadas e vinhos de
              alta pontuação — sempre priorizando qualidade, autenticidade e
              potencial de valorização. Cada rótulo é criteriosamente verificado
              antes de integrar o portfólio.
            </p>
            <p>
              O atendimento é conduzido diretamente pelo sommelier, de forma
              discreta e personalizada, em canal privado exclusivo.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>13+</span>
              <span className={styles.statLabel}>Maisons curadas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Procedência verificada</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
