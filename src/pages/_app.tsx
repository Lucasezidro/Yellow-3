import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { theme } from '../../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
    
    )
}

export default MyApp
