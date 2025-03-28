import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { Nunito_Sans } from 'next/font/google';
const Header = dynamic(() => import('@/components/Header/Header'));
const Footer = dynamic(() => import('../components/Footer/Footer'));

const NunitoSans = Nunito_Sans({
    subsets: ['cyrillic'],
    variable: '--font-nunito'
});

export const metadata = {
    title: 'Стоматолог в Санкт-Петербурге: запись на прием | Некрашевич Марина Сергеевна',
    description:
        'Некрашевич Марина Сергеевна - врач-стоматолог в Санкт-Петербурге. Обладаю богатым опытом работы в области стоматологии. Я использую современные инструменты и технологии, чтобы обеспечить лучшее лечение для моих пациентов. На моем сайте вы найдете информацию обо мне, моей специализации, навыках и инструментах, которыми я владею. Вы также можете связаться со мной по ссылкам на мои профили в социальных сетях, чтобы записаться на прием. Буду рада видеть вас на моем приеме!',
    other: {
        'theme-color': '#FFFFFF',
        'color-sheme': 'white only',
        'twitter:image': 'https://ltdfoto.ru/images/2023/09/30/SNIMOK-EKRANA-2023-09-30-V-14.37.26.png',
        'twitter:card': 'summary_large_image',
        'og:url': 'msnek.ru',
        'og:image': 'https://ltdfoto.ru/images/2023/09/30/SNIMOK-EKRANA-2023-09-30-V-14.37.26.png',
        'og:type': 'website'
    },
    icons: {
        apple: '/apple-icon.png'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={`min-h-screen ${NunitoSans.variable}`}>
                <Header />
                <main className="text-primary">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
