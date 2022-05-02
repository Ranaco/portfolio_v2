import { shouldForwardProp, LinkBox, LinkOverlay, Box, chakra, useColorModeValue, Container, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Global } from '@emotion/react'
import { motion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const WorkTile = ({ img, title, children, id }) => {
    return(
        <LinkBox w = "50vw">
        <StyledDiv
            whileHover = {{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
            }}
            textAlign = "center"
            p = { 30 }
            bgColor = {useColorModeValue("#ECEFF4", "#4C566A")}
            borderRadius = "20px">
            <LinkOverlay cursor = "pointer" href = {`work/${id}`} >
            <Image src = {img} alt = {title} placeHolder = "blur" className = "work-tile-image"/>
            <Text fontSize = {30} fontWeight = "bold">
                {title}
            </Text>
            <Text fontSize = {20}>
                {children}
            </Text>
            </LinkOverlay>
        </StyledDiv>
        </LinkBox>
    )
}

export const WorkTileStyle = () => {
    <Global
        styles = {
            `
            work-tile-image{
            border-radius: 12px;
            }
            `
        }
        />
}

export default WorkTile
