import { Text, Heading } from '@chakra-ui/react'

const BioYear = ({ children }) => {
    return(
        <Text fontSize = "20">
            <b>{children}</b>
        </Text>
    )
}

export default BioYear
