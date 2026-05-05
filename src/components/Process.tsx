import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Solicite acesso',
    desc: 'Preencha o formulário com seu perfil e interesse. O acesso é concedido após análise pelo sommelier.',
  },
  {
    num: '02',
    title: 'Curadoria personalizada',
    desc: 'O sommelier prepara uma seleção sob medida para o seu perfil, com procedência detalhada de cada rótulo.',
  },
  {
    num: '03',
    title: 'Atendimento privado',
    desc: 'Você recebe sua curadoria via WhatsApp, em canal privado, com total discrição e disponibilidade.',
  },
  {
    num: '04',
    title: 'Reserve com tranquilidade',
    desc: 'Disponibilidade e condições são tratadas diretamente, com atendimento consultivo e reservado.',
  },
]

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={`${styles.header} reveal`}>
          <div>
            <p className="section-eyebrow">Processo</p>
            <h2 className={styles.title}>
              Como<br /><em className={styles.em}>funciona.</em>
            </h2>
          </div>
          <p className={styles.intro}>
            Um atendimento construído sobre discrição. Sem catálogos abertos,
            sem preços públicos, sem pressão. Apenas curadoria, procedência e
            confiança.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} reveal reveal-delay-${i + 1}`}
            >
              <span className={styles.stepNum} aria-hidden>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
