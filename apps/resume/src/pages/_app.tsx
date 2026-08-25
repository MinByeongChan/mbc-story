import { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import '../styles/fonts.scss';
import 'gocheok-project/src/tailwind.css';
import '../styles/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={poppins.className}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
