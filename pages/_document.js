import { Html, Head, Main, NextScript } from 'next/document'
import { Box, BodyText } from '@sfgov/react'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://unpkg.com/sfgov-design-system@2.5.1/dist/css/fonts.css' />
        <style>{`
          body { font-family: var(--sfgov-fonts-body); }
        `}</style>
      </Head>
      <Box as='body'>
        <Main />
        <NextScript />
      </Box>
    </Html>
  )
}
