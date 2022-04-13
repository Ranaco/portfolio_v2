import Head from 'next/head'
import { Box } from '@chakra-ui/react'


const Secondary = ({ children, route, title }) => {
    return(
        <Box>
            {
                title && (
                    <Head>
                        <title>{title} - Rana Satyam Raj </title>
                        <meta name = "twitter:title" content = {title}/>
                        <meta property = "og:title" content = {title}/>
                    </Head>
                )
            }
            {children}
        </Box>
    )
}

export default Secondary
