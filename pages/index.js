import { Container, Heading, Box, Text, chakra, shouldForwardProp, Link } from '@chakra-ui/react'
import Article from '../components/article'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import useWindowDimensions from '../lib/deviceViewport'
import { useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import BioYear from '../components/bio_year'

const AnimatedBox = chakra( motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === "transition"
    }
} )

const ListItem = ({ children, link }) => {
    return(
        <li>
            <Link href = {link} target = "_">
                {children}
            </Link>
        </li>
    )
}

const Homepage = () => {

    const { height, width } = useWindowDimensions()

    return(
        <Container mt = "300px" w = "100vw" css = {{ flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }} >
            <Box w = "45vw">
            <AnimatedBox
                w = { width < 750 ? "60vw" : undefined }
                initial = "init"
                animate = "anim"
                variants = {{
                    init: {
                        x: -90,
                        opacity: 0
                    },
                    anim: {
                        x: 0,
                        opacity: 1
                    }
                }}
                transition = {{
                    duration: 0.8,
                    delay: 0.3
                }}
                p = { 5 }
                borderRadius = "10px"
                textAlign = "center"
                css = {{ backdropFilter: "blur(10px)", }}
                bgColor = {useColorModeValue("#ECEFF4", "#434C5E")}>
                <Text   
                flexWrap={['wrap']}
                    textAlign = "center"
                    fontSize = "25px"
                >
                    Hlo, I am a software developer based in India!
            </Text>
            </AnimatedBox>
        <AnimatedBox
            mt = { 10 }
            initial = "init"
                animate = "anim"
                variants = {{
                    init: {
                        y: -20,
                        opacity: 0
                    },
                    anim: {
                        y: 0,
                        opacity: 1
                    }
                }}
                transition = {{
                    duration: 0.8,
                    delay: 0.3
                }}
            >
                <Text textAlign = "center" fontSize = {width > 860 ? "50px" : width/10} >
                        <b>Rana Satyam Raj</b>
                </Text>
                <Text textAlign={"center"} fontSize = "20px">
                    <b>Digital Wizard</b> <i>( Developer / Designer )</i>
                </Text>
            </AnimatedBox>
            </Box>
            <Article>
                <Heading as = "h3" variant = "title-heading">
                    Work
                </Heading>
                <Text pt = { 5 } fontSize = "20px">
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am a freelance and full-stack ( App & Web ) developer and student based in <Link href = "https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1rlBVL7RTC7eDS-Yw8Qs9gFYBjMc&ll=25.601902%2C85.12206999999997&z=17" target = "_">Bihar, India</Link>. I love to learn and create new things. I just love to stay alone and work on my skills, solving problems from my daily life through coding.
                </Text>
                <Heading mt = { 20 } as = "h3" variant = "title-heading">
                    Bio
                </Heading>
                <Text pt = { 10 }>
                    <Paragraph style = {{ display: "flex", alignItems: "center" }}>
                        <BioYear>2004&nbsp;</BioYear><Text fontSize = "20px">Born in Patna, Bihar, India.</Text>
                    </Paragraph>
                    <Paragraph style = {{ display: "flex", alignItems: "center", paddingTop: "30px"}}>
                        <BioYear>2020&nbsp;</BioYear><Text fontSize = "20px">Finished matriculation</Text>
                    </Paragraph>
                    <Paragraph style = {{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
                        <BioYear>2020 - /&nbsp;</BioYear><Text fontSize = "20px">Studying and coding ;)</Text>
                    </Paragraph>
                </Text>
                <Heading as = "h3" variant = "title-heading" mt = { 55 }>
                    Hobbies
                </Heading>
                    <Paragraph>
                        <Text pb = { 30 } fontSize = "20px" pt = { 30 }> - &nbsp;Music, Art, Physics, Blockchain</Text>
                </Paragraph>
                <Heading mt = { 35 } as = "h3" variant = "title-heading">
                    Tech Stack
                </Heading>
                            <Heading pt = { 30 } fontSize = "20px" pb = { 30 } variant = "title-heading">
                              Languages :
                            </Heading>
                            <Box>
                            <li>
                                Dart
                            </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    C++
                                </li>
                                <li>
                                    Python
                                </li>
                                <li>
                                    Solidity
                                </li>
                                <li>
                                    HTML
                                </li>
                            </Box>
                            <Heading pt = { 30 } pb = { 30 } fontSize = "20px" variant = "title-heading">
                                Frameworks / SDKs :
                                </Heading>
                            <Box>
                                <ListItem link = "https://www.flutter.dev">
                                    Flutter
                                </ListItem>
                                <ListItem link = "https://www.nextjs.org">
                                    Nextjs
                                </ListItem >
                                <ListItem link = "https://www.reactjs.org">
                                    Reactjs
                                </ListItem>
                                <ListItem link = "https://www.nodejs.org">
                                    Nodejs
                                </ListItem>
                                <ListItem link = "https://www.expressjs.com">
                                    Expressjs
                                </ListItem>
                                <ListItem link = "https://firebase.google.com/docs">
                                    Firebase
                                </ListItem>
                                <ListItem link = "https://Socket.io">
                                    Socket IO
                                </ListItem>
                                <ListItem link = "https://www.figma.com">
                                    Figma
                                </ListItem>
                                <ListItem link = "https://www.markdownguide.com">
                                    Mardown
                                </ListItem>
                                <ListItem link = "https://www.chakra-ui.com">
                                    Chakra UI
                                </ListItem>
                            </Box>
                            <Heading mb = { 30 } mt = { 30 } fontSize = "20px" variant = "title-heading">
                                IDEs / Text Editors :
                            </Heading>
                            <Box pb = { 90 }>
                                <ListItem link = "https://developer.android.com/studio">
                                    Android Studio
                                </ListItem>
                                <ListItem link = "https://www.vim.org">
                                    Vim
                                </ListItem>
                                <ListItem link = "https://code.visualstudio.com">
                                    Visual Studio Code
                                </ListItem>
                            </Box>
        </Article>
        </Container>
    )

}

export default Homepage
