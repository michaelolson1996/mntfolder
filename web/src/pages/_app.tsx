"use strict";

// mui imports
import { 
  CssBaseline, 
  ThemeProvider 
} from "@mui/material";

// local imports
import Layout from './layout';
import getTheme from '../shared/styles/theme';


function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={getTheme(true)}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
};

export default MyApp;