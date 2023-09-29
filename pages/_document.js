import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ru'>
      <Head>
        {/* <title>Стоматолог в Санкт-Петербурге: запись на прием | Некрашевич Марина Сергеевна</title>
         */}
        <meta
          name='description'
          content='Некрашевич Марина Сергеевна - врач-стоматолог в Санкт-Петербурге. Обладаю богатым опытом работы в области стоматологии. Я использую современные инструменты и технологии, чтобы обеспечить лучшее лечение для моих пациентов. На моем сайте вы найдете информацию обо мне, моей специализации, навыках и инструментах, которыми я владею. Вы также можете связаться со мной по ссылкам на мои профили в социальных сетях, чтобы записаться на прием. Буду рада видеть вас на моем приеме!'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
