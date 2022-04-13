import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import instagram from '../public/logos/instagram.png'
import github from '../public/logos/GitHub-Mark-120px-plus.png'
import email from '../public/logos/gmail.png'
import discord from '../public/logos/discord.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const AnimatedIcons = ({ src, alt, height, width, href }) => {
  return (
    <motion.div
      style={{
        height: '70px',
        width: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px'
      }}
      whileHover={{
        scale: 1.5,
        borderRadius: '10px',
        backgroundColor: useColorModeValue('#A3BE8C', '#EBCB8B') 
      }}
    >
        <Link href = {href} passHref scroll = {false}><a target = "_"><Image src={src} alt={alt} height={height} width={width} /></a></Link>
    </motion.div>
  )
}

const SideBar = () => {
  return (
    <Box
      h="100vh"
      m = { 0 }
      p  = { 0 }
      css={{ display: 'flex', flexDirection: 'column', position: 'fixed' }}
    >
        <Container p = { 0 } m = { 0 } w = "2px" h = "400px" bgColor = "#5E81AC" position = "fixed" bottom = "10px" left = "60px"/>
          <Container
        display="flex"
        flexDirection="column"
        gap="30px"
        position="absolute"
        ml = "10px"
        css={{ bottom: '30px' }}
      >
        <AnimatedIcons
            href = {"https://instagram.com/Myself_rana.raj"}
          src={instagram}
          height="60px"
          width="85px"
          alt="instagram"
        />
              <AnimatedIcons href = {"https://github.com/Ranaco"} src={github} height="50px" width="50px" alt="github" />
        <AnimatedIcons
            href = "https://discord.com/"
          src={discord}
          height="50px"
          width="80px"
          alt="discord"
        />
              <AnimatedIcons href = "mailto: ranasatyamraj@gmail.com" src={email} height="45px" width="45px" alt="email" />
      </Container>
    </Box>
  )
}

export default SideBar
