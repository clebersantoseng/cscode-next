import { GlobalProvider } from '../contexts/GlobalContext';

import '../styles/global.css';
import '../styles/nprogress.css';

function MyApp({ Component, pageProps }) {

  return (
  <GlobalProvider>
    <Component {...pageProps} />
  </GlobalProvider>
  );
}

export default MyApp