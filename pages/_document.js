import Document, { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        {'<'}!-- Google tag (gtag.js) --{'>'}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S6HW27Q8F6"></script>
        <script>
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
          dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S6HW27Q8F6');
          `.replace(/\n/g, ""), // Remove line breaks to avoid issues
        }}
        </script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}