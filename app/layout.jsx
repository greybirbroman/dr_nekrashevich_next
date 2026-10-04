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
        <Script id="anchor-reload-behavior" strategy="beforeInteractive">
          {`window.history.scrollRestoration = "auto";
          const navigation = window.performance.getEntriesByType("navigation")[0];
          if (navigation?.type === "reload" && window.location.hash) {
            window.history.replaceState(
              window.history.state,
              "",
              window.location.pathname + window.location.search,
            );
          }`}
        </Script>
      </body>
    </html>
  )
}
