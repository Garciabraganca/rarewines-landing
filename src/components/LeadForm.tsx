'use client'

import { useState, useRef } from 'react'
import styles from './LeadForm.module.css'

interface FormState {
  nome: string
  whatsapp: string
  email: string
  cidade: string
  interesse: string
  faixa: string
  adulto: boolean
  aceite: boolean
}

const INITIAL: FormState = {
  nome: '',
  whatsapp: '',
  email: '',
  cidade: '',
  interesse: '',
  faixa: '',
  adulto: false,
  aceite: false,
}

const FALLBACK_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbxxirHZNn59bMngSVBtqVX4sftQw4ruURoieAJFJQ62VtvCyaIK3f7raa9V4kAmRJreRQ/exec'

const SHEETS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || FALLBACK_SHEETS_URL

const sanitizePhone = (value: string) =>
  value.replace(/[^\d]/g, '')

const WPP_NUMBER = sanitizePhone(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5511991517112'
)

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [wppUrl, setWppUrl] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const set = (key: keyof FormState, value: string | boolean) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const validate = (): boolean => {
    const e: typeof errors = {}
    if (!form.nome.trim())     e.nome      = 'Obrigatório'
    if (!form.whatsapp.trim()) e.whatsapp  = 'Obrigatório'
    if (!form.interesse)       e.interesse = 'Selecione uma opção'
    if (!form.faixa)           e.faixa     = 'Selecione uma opção'
    if (!form.adulto)          e.adulto    = 'Confirmação obrigatória'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const buildWppUrl = (): string => {
    const msg = [
      'Olá, tenho interesse em solicitar acesso à seleção privada Sommelier Marc / RareWines.',
      '',
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      form.email  ? `E-mail: ${form.email}`         : null,
      form.cidade ? `Cidade/Estado: ${form.cidade}` : null,
      `Interesse: ${form.interesse}`,
      `Faixa de investimento: ${form.faixa}`,
      '',
      'Origem: Landing Sommelier Marc / RareWines',
    ]
      .filter(line => line !== null)
      .join('\n')
    return `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    setSendError(false)

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }

    const url = buildWppUrl()
    setWppUrl(url)

    try {
      const payload = {
        dataEnvio: new Date().toISOString(),
        nome: form.nome,
        whatsapp: form.whatsapp,
        email: form.email,
        cidade: form.cidade,
        interesse: form.interesse,
        investimento: form.faixa,
        maioridade: form.adulto,
        aceiteContato: form.aceite,
        origem: 'Landing Rarewines',
        pagina: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      }
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.error('[LeadForm] Erro ao enviar para Google Sheets:', err)
      setSending(false)
      setSendError(true)
      return
    }

    setSending(false)
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="acesso">
      <div className={styles.wrap}>

        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <p className="section-eyebrow">Acesso restrito</p>
          <h2 className={styles.title}>
            Solicitar<br /><em className={styles.em}>acesso reservado.</em>
          </h2>
          <p className={styles.subtitle}>
            Preencha os dados abaixo. Seu pedido será analisado pelo sommelier,
            que entrará em contato pelo WhatsApp com a curadoria personalizada
            para o seu perfil.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successLine} />
            <h3 className={styles.successTitle}>Pedido recebido.</h3>
            <p className={styles.successBody}>
              O sommelier entrará em contato pelo WhatsApp.
            </p>
            <a
              href={wppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wppButton}
            >
              Chamar no WhatsApp
            </a>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className={`${styles.form} reveal`}
          >
            {/* ── Row 1 ── */}
            <div className={styles.row}>
              <Field label="Nome completo" error={errors.nome} required>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={e => set('nome', e.target.value)}
                  autoComplete="name"
                />
              </Field>

              <Field label="WhatsApp" error={errors.whatsapp} required>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="+55 (00) 9 0000-0000"
                  value={form.whatsapp}
                  onChange={e => set('whatsapp', e.target.value)}
                  autoComplete="tel"
                />
              </Field>
            </div>

            {/* ── Row 2 ── */}
            <div className={styles.row}>
              <Field label="E-mail">
                <input
                  className={styles.input}
                  type="email"
                  placeholder="email@exemplo.com"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  autoComplete="email"
                />
              </Field>

              <Field label="Cidade / Estado">
                <input
                  className={styles.input}
                  type="text"
                  placeholder="São Paulo, SP"
                  value={form.cidade}
                  onChange={e => set('cidade', e.target.value)}
                  autoComplete="address-level2"
                />
              </Field>
            </div>

            {/* ── Row 3 ── */}
            <div className={styles.row}>
              <Field label="Interesse principal" error={errors.interesse} required>
                <select
                  className={styles.select}
                  value={form.interesse}
                  onChange={e => set('interesse', e.target.value)}
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Vinhos raros">Vinhos raros</option>
                  <option value="Evento privado">Evento privado</option>
                  <option value="Wine Club">Wine Club</option>
                  <option value="Conversar com o sommelier">Conversar com o sommelier</option>
                </select>
              </Field>

              <Field label="Faixa de investimento" error={errors.faixa} required>
                <select
                  className={styles.select}
                  value={form.faixa}
                  onChange={e => set('faixa', e.target.value)}
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Até R$ 1.500">Até R$ 1.500</option>
                  <option value="R$ 1.500 a R$ 5.000">R$ 1.500 a R$ 5.000</option>
                  <option value="Acima de R$ 5.000">Acima de R$ 5.000</option>
                  <option value="Evento privado">Evento privado</option>
                </select>
              </Field>
            </div>

            {/* ── Checkboxes ── */}
            <div className={styles.checks}>
              <CheckItem checked={form.adulto} onChange={v => set('adulto', v)} error={errors.adulto}>
                Declaro ter mais de 18 anos.
              </CheckItem>
              <CheckItem checked={form.aceite} onChange={v => set('aceite', v)}>
                Aceito receber contato sobre a seleção privada Sommelier Marc / RareWines.
              </CheckItem>
            </div>

            {/* ── Send error ── */}
            {sendError && (
              <p className={styles.sendError}>
                Ocorreu um erro ao registrar sua solicitação. Tente novamente ou{' '}
                <a
                  href={`https://wa.me/${WPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sendErrorLink}
                >
                  chame pelo WhatsApp.
                </a>
              </p>
            )}

            {/* ── Submit ── */}
            <button type="submit" className={styles.submit} disabled={sending}>
              {sending ? 'Enviando...' : 'Encaminhar pedido de acesso'}
            </button>

            <p className={styles.note}>
              Atendimento conduzido com total discrição · Sem compromisso · Sem
              compartilhamento de dados
            </p>
          </form>
        )}

      </div>
    </section>
  )
}

/* ── Sub-components ── */

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.req}>*</span>}
      </label>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

function CheckItem({
  checked,
  onChange,
  error,
  children,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className={styles.checkRow} onClick={() => onChange(!checked)}>
        <div className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
          {checked && <div className={styles.checkDot} />}
        </div>
        <span className={styles.checkText}>{children}</span>
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
