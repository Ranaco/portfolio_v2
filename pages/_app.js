import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Font from '../components/font'



const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
        <Font/>
      <Layout router={router}>
               <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
