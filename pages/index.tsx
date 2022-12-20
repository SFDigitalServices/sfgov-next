import Head from 'next/head'
import { Box, Container, PrimaryButton, TitleSm } from '@sfgov/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>SF.gov</title>
      </Head>

      <main>
        <Container css={{ py: 8, marginBottom: 20 }}>
          <TitleSm as='h1'>SF.gov</TitleSm>
        </Container>

        <Box css={{ bg: '$blueL1', py: 20, marginBottom: 60 }}>
          <Container>
            <PrimaryButton>Hi, I'm a button!</PrimaryButton>
          </Container>
        </Box>

        <Box css={{ bg: '$yellowL2', py: 20 }}>
          <Container>
            Yellow
          </Container>
        </Box>
      </main>
    </>
  )
}