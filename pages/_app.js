import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Font from '../components/font'
import { motion } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
        <Font/>
      <Layout router={router}>
        <motion.div
           key = {router.route}
    initial = "init" animate = "anim" variants = {{
          "init": {
              opacity: 0.5,
              x: -200,
          },
          "anim": {
              x: 0,
              opacity: 1
          }
          }}
            transition = {{duration: 0.4}}
      >
        <Component {...pageProps} />
    </motion.div>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
