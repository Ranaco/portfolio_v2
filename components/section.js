import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === "transition"
    }
})

const Section = ({ children, delay }) => {
    return(
        <StyledDiv 
            mt = { 20 }
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
                duration: 0.8, delay: delay
            }}
        >
            {children}

    
        </StyledDiv>
    )
}

export default Section
