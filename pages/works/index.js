import { Container, SimpleGrid, Box, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/secondary'
import Image from 'next/image'
import WorkTile  from '../../components/work_tile'
import Insta from '../../public/logos/instagram.png'

const Works = () => {
    return(
        <Layout title = "Works">
        <SimpleGrid column = {[1, 1, 2]} gap = { 6 }>
            <WorkTile title = "Rana" desc = "nothing" img = {Insta}>
                This is the best thing
            </WorkTile>
        </SimpleGrid>
        </Layout>
    )
}

export default Works
