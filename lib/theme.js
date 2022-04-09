import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
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
        fontSize: 20
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: '#ff63c3',
      textUnderlineOffset: 4
    })
  }
}

const fonts = {}
const colors = {}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
