import { BodyText } from '@sfgov/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStylesheet } from '../components/ServerStylesheet'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <ServerStylesheet />
      </Head>
      <BodyText as='body' css={{
        color: '$slateL4',
        m: 0
      }}>
        <Main />
        <NextScript />
      </BodyText>
    </Html>
  )
}
