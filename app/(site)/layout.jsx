import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const siteTitle =
  'Стоматолог в Санкт-Петербурге | Некрашевич Марина Сергеевна'
const siteDescription =
  'Врач-стоматолог в Санкт-Петербурге. Бережное лечение взрослых и подростков, опыт с 2013 года.'
const socialImage = {
  url: '/hero-image-2.webp',
  alt: 'Марина Некрашевич, врач-стоматолог',
}

export const metadata = {
  metadataBase: new URL('https://msnek.ru'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Некрашевич Марина Сергеевна',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#eef6f7',
}

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main className="text-primary">{children}</main>
      <Footer />
    </>
  )
}
