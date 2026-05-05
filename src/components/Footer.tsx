import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.brandName}>Sommelier Marc · Rare Wines</span>
        <span className={styles.brandSub}>Curadoria Privada · {year}</span>
      </div>

      <p className={styles.legal}>
        Conteúdo destinado exclusivamente a maiores de 18 anos. Beba com
        moderação. Disponibilidade sujeita à confirmação no atendimento.
        Operação privada de curadoria.
      </p>
    </footer>
  )
}
