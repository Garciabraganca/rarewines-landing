import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sommelier Marc — Curadoria Privada de Vinhos Raros',
  description:
    'Acesso reservado a safras icônicas, rótulos colecionáveis e experiências conduzidas por sommelier. Atendimento consultivo e personalizado.',
  openGraph: {
    title: 'Sommelier Marc — Curadoria Privada',
    description: 'Vinhos raros. Procedência. Discrição. Acesso por solicitação.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel — only injected when NEXT_PUBLIC_META_PIXEL_ID is set */}
        {pixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s){
                    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)
                  }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init','${pixelId}');
                  fbq('track','PageView');
                `,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
