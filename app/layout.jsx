import { Manrope, Prata } from 'next/font/google'

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
      <body className={`min-h-screen ${manrope.variable} ${prata.variable}`}>{children}</body>
    </html>
  )
}
