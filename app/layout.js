
//import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: ' Стоматолог в Санкт-Петербурге: запись на прием | Некрашевич Марина Сергеевна',
  description: 'Некрашевич Марина Сергеевна - врач-стоматолог в Санкт-Петербурге. Обладаю богатым опытом работы в области стоматологии. Я использую современные инструменты и технологии, чтобы обеспечить лучшее лечение для моих пациентов. На моем сайте вы найдете информацию обо мне, моей специализации, навыках и инструментах, которыми я владею. Вы также можете связаться со мной по ссылкам на мои профили в социальных сетях, чтобы записаться на прием. Буду рада видеть вас на моем приеме!',
}
export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
