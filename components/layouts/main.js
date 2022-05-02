import Head from 'next/head'
import { Container, Box } from '@chakra-ui/react'
import SideBar from '../sidebar'
import NavBar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as = "main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Rana Satyam Raj - Homepage </title>
      </Head>
        <NavBar route = {router.asPath}/>
        <SideBar />
        <Container

        >
          <Box
            pt = "100px"
              style=
        {{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"}}>
          {children}
          </Box>
      </Container>
    </Box>
  )
}

export default Main
