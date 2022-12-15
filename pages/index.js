import Head from 'next/head'
import { Box, TitleXl } from '@sfgov/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>SF.gov</title>
      </Head>

      <Box as='main'>
        <TitleXl as='h1'>SF.gov</TitleXl>
      </Box>
    </>
  )
}