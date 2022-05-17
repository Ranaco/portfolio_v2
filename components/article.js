import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import useWindowDimensions from '../lib/deviceViewport.js'

const AnimatedDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Article = ({ children, props }) => {

    const { width, height } = useWindowDimensions()

    return(
        <AnimatedDiv
            mt = { 20 }
            w = { width < 560 ? "90vw" : "45vw"}
        initial = "init"
        animate = "anim"
            variants = {{
                init: {
                    opacity: 0,
                    y: 40
                },
                anim: {
                    opacity: 1,
                    y: 0
                }
            }}
            transition = {{
                duration: 0.8, delay: 0.3
            }}
       >
            {children}
            </AnimatedDiv>
    )
}

export default Article
