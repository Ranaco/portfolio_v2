import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const AnimatedDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Article = ({ children, props }) => {
    return(
        <AnimatedDiv
            w = "80vw"
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
                duration: 0.5, delay: 0.3
            }}
       >
            {children}
            </AnimatedDiv>
    )
}

export default Article
