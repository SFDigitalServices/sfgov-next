import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://unpkg.com/sfgov-design-system@2.5.1/dist/css/fonts.css' />
        <style type='text/css'>{`
          body {
            font-family: var(--sfgov-fonts-body);
            font-size: var(--sfgov-fontSizes-body);
            line-height: var(--sfgov-lineHeights-body);
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
