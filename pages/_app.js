import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {darkTheme} from '../themes/dark'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={extendTheme(darkTheme)}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
