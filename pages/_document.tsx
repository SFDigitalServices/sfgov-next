import { Box, styled } from '@sfgov/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStylesheet } from '../components/ServerStylesheet'

const Body = styled('body', {
  m: 0
})

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://unpkg.com/sfgov-design-system@2.5.1/dist/css/fonts.css' />
        <ServerStylesheet />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  )
}
