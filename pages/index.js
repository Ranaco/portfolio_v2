import { Container, Heading, Box, Text, chakra, shouldForwardProp, Link } from '@chakra-ui/react'
import Article from '../components/article'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import useWindowDimensions from '../lib/deviceViewport'
import { useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'

const AnimatedBox = chakra( motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === "transition"
    }
} )

const Homepage = () => {

    const { height, width } = useWindowDimensions()

    return(
        <Container mt = "300px" w = "100vw" css = {{ flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }} >
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
                    w = { width > 860 ? "600px" : "60vw" }
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
                <Text textAlign = "center" fontSize = {width > 860 ? "50px" : width/20} w = "402px">
                        <b>Rana Satyam Raj</b>
                </Text>
                <Text fontSize = "20px">
                    <b>Digital Wizard</b> <i>( Developer / Designer )</i>
                </Text>
            </AnimatedBox>
            <Article>
                <Heading as = "h3" variant = "title-heading">
                    Work
                </Heading>
                <Text pt = { 5 } fontSize = "20px">
                    <p>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am a freelance and full-stack ( App & Web ) developer based in <Link href = "https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1rlBVL7RTC7eDS-Yw8Qs9gFYBjMc&ll=25.601902%2C85.12206999999997&z=17" target = "_">Bihar, India</Link>. I love to learn and create new things. I just love to stay alone and work on my skills, solving problems from my daily life through coding.
                    </p>
                </Text>

            </Article>
        </Container>
    )

}

export default Homepage
