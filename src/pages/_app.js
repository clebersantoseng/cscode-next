import { GlobalProvider } from '../contexts/GlobalContext';

import { NavBar } from '../components/NavBar';

import '../styles/global.scss';
import '../styles/nprogress.css';

function MyApp({ Component, pageProps }) {

  return (
  <GlobalProvider>
    <NavBar />
    <Component {...pageProps} />
  </GlobalProvider>
  );
}

export default MyApp