import '../styles/globals.css'
import RootLayout from '../app/layout';

const MyApp = ({ Component, pageProps }) => (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
);

export default MyApp;
