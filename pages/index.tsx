import Head from 'next/head'
import { Box, Container, PrimaryButton, TitleLg } from '@sfgov/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>SF.gov</title>
      </Head>

      <Box as='main'>
        <Container css={{ py: 8 }}>
          <TitleLg as='h1'>SF.gov</TitleLg>
        </Container>

        <Box css={{ bg: '$blueL1', py: 20 }}>
          <Container>
            <PrimaryButton>Hi, I'm a button!</PrimaryButton>
          </Container>
        </Box>
      </Box>
    </>
  )
}