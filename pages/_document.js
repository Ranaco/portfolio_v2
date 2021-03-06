import NextDocument, { Head, Main, Html, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

class Document extends NextDocument{
    render(){
        return(
            <Html>
                <Head/>
                <body>
                    <ColorModeScript initialColorMode = {theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default Document;
