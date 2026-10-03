import { Nunito_Sans } from 'next/font/google'

import '../styles/globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`min-h-screen ${nunitoSans.variable}`}>{children}</body>
    </html>
  )
}
