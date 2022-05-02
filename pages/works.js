import { Container, SimpleGrid, Divider, Heading, Grid, GridItem } from '@chakra-ui/react'
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
            <Container w = "75vw" display = "flex" alignItems = "center" justifyContent = "center">
            <SimpleGrid w = "60vw" columns = {[ 1, 1, 2 ]} spacing = "30vw">
                <Section>
                <WorkTile img = {Insta} id = {'doggo'} title = {"Messenger"}>
                A messenger app built with flutter, nodejs, socket-io, firebase and mongodb.
                </WorkTile>
                </Section>
                <Section>
                <WorkTile img = { Insta } id = { 'doggo' } title = {"Team Management"}>
                    A management app to manage your whole Team
                </WorkTile>
                </Section>
            </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
