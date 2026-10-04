import { Manrope, Prata } from 'next/font/google'
import Script from 'next/script'

import '../styles/globals.css'

const manrope = Manrope({
  subsets: ['cyrillic'],
  variable: '--font-manrope',
})

const prata = Prata({
  weight: '400',
  subsets: ['cyrillic'],
  variable: '--font-prata',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`min-h-screen ${manrope.variable} ${prata.variable}`}>
        {children}
        <Script id="manual-scroll-restoration" strategy="beforeInteractive">
          {'window.history.scrollRestoration = "manual";'}
        </Script>
      </body>
    </html>
  )
}
