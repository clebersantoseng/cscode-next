import { GlobalProvider } from '../contexts/GlobalContext';

import { NavBar } from '../components/NavBar';
import Whatsapp from '../components/Whatsapp';

import '../styles/global.css';
import '../styles/nprogress.css';

function MyApp({ Component, pageProps }) {

  return (
  <GlobalProvider>
    <NavBar />
    <Whatsapp />
    <Component {...pageProps} />
  </GlobalProvider>
  );
}

export default MyApp