import { Container, Box, Text } from '@chakra-ui/react'
import Article from '../components/article'

const Homepage = () => {
    return(
        <Container css = {{ display: "flex", alignItems: "center", justifyContent: "center" }} w = "100vw">
            <Article>
            <Box>
                <Text fontSize = "39px"
                    fontFamily = "Nunito"
                >
                    Hell othee
                </Text>
            </Box>
            </Article>
        </Container>
    )

}

export default Homepage
