import { Html, Head, Main, NextScript } from 'next/document';
import ThemeScriptTag from '../components/ThemeScriptTag';
import Layout from './layout';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ThemeScriptTag />
          <Main />
        <NextScript />
      </body>
    </Html>
  );
};