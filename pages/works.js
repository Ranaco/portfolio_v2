import { Container, Text, SimpleGrid, Divider, Heading, Grid, GridItem } from '@chakra-ui/react'
import Layout from '../components/layouts/secondary'
import Image from 'next/image'
import WorkTile  from '../components/work_tile'
import Insta from '../public/logos/instagram.png'
import useWindowDimensions from '../lib/deviceViewport'
import Section from '../components/section'

const Works = () => {

    const { width, height} = useWindowDimensions()

    return(
        <Layout title = "Works" w = "55vw">
            <Container textAlign = "center">
                <Text fontSize = "40px">
                    Works
                </Text>
            </Container>
        </Layout>
    )
}

export default Works
