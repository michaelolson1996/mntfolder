import '../styles/globals.css';
import { ThemeProvider } from '../context/theme-context';
import Layout from './layout';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
};

export default MyApp;