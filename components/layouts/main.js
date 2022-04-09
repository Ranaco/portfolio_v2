import Head from 'next/head'
import { Container, Box } from '@chakra-ui/react'
import SideBar from '../sidebar.tsx'
import NavBar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box maxW="100%" maxH="100%" p={0} m={0}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Rana Satyam Raj - Homepage </title>
      </Head>
        <NavBar route = {router.asPath}/>
      <Container display="flex" m={0} p={0} maxW="100%" maxH="100%">
        <SideBar />
          <div style={{ marginLeft: '100px', paddingTop: "80px"}}>{children}</div>
      </Container>
    </Box>
  )
}

export default Main
