import { NextRequest, NextResponse } from 'next/server'

const SHEETS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbxxirHZNn59bMngSVBtqVX4sftQw4ruURoieAJFJQ62VtvCyaIK3f7raa9V4kAmRJreRQ/exec'

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json()

    const res = await fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    })

    const text = await res.text().catch(() => '')
    console.log('[leads/route] Sheets response status:', res.status, text.slice(0, 200))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[leads/route] Erro ao enviar para Sheets:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
