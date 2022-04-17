import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      fontFamily: "'M PLUS Rounded 1c'",
      bg: mode('#D8DEE9', '#2E3440')(props),
      color: mode('#2E3440', '#D8DEE9')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'title-heading': {
        textDecoration: 'underline',
        textDecorationColor: '#525252',
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
        fontSize: 25,
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
        fontSize: 20,
        textUnderlineOffset: 4
    })
  },
    Text:{
        baseStyle: props => ({
        color: mode("#2E3440", "#D8DEE9")(props),
            fontFamily: "'M PLUS Rounded 1c'"
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    text: "'M PLUS Rounded 1c'"
}
const colors = {}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
