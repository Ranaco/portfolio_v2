import { LinkBox, LinkOverlay, Box, Container, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Global } from '@emotion/react'

const WorkTile = ({ img, title, children }) => {
    return(
        <Box textAlign = "center">
        <LinkBox cursor = "pointer">
            <Link href = "/" passHref>
                <LinkOverlay>
                    <Image 
                className = 'work-tile-image'
                loading = 'lazy'
                placeholder = "blur"
                src = {img}
                alt = {title}
            />
                <Text fontSize = "25px" mt = { 4 }>
                    <b>{title}</b>
                </Text>
                    <Text fontSize = "20">
                        {children}
                    </Text>
                </LinkOverlay>
            </Link>
        </LinkBox>
        </Box>
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
