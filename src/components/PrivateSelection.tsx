import Image from 'next/image'
import { wines } from '@/data/wines'
import styles from './PrivateSelection.module.css'

export default function PrivateSelection() {
  return (
    <section className={styles.section}>

      {/* Ornament divider */}
      <div className="ornament" style={{ marginBottom: '5rem' }}>
        <div className="ornament-line" />
        <div className="ornament-dot" />
        <div className="ornament-line" />
      </div>

      {/* Header */}
      <div className={`${styles.header} reveal`}>
        <div className={styles.headerLeft}>
          <p className="section-eyebrow">Curadoria exclusiva</p>
          <h2 className={styles.title}>
            Seleção<br /><em className={styles.em}>privada.</em>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.desc}>
            Rótulos disponíveis sob consulta direta com o sommelier. Cada
            garrafa carrega história, procedência documentada e valor
            reconhecido no mercado internacional.
          </p>
          <p className={styles.note}>
            Disponibilidade sujeita a confirmação · Lista atualizada periodicamente
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        {wines.map((wine, i) => (
          <div
            key={wine.id}
            className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
          >
            {/* Image */}
            <div className={styles.imageWrap}>
              <Image
                src={wine.image}
                alt={wine.alt}
                fill
                quality={80}
                className={styles.image}
                style={{ objectPosition: wine.objectPosition ?? 'center top' }}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Body */}
            <div className={styles.body}>
              <span className={styles.tag}>{wine.status}</span>
              <h3 className={styles.name}>{wine.name}</h3>
              <p className={styles.region}>
                {wine.region} · {wine.country}
              </p>
              <div className={styles.sep} />
              <span className={styles.access}>Acesso mediante solicitação</span>
            </div>

            {/* Number watermark */}
            <span className={styles.num} aria-hidden>
              {String(wine.id).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}
