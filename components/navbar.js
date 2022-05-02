import {
    Container,
    Box,
    Menu,
    MenuItem,
    IconButton,
    MenuList,
    MenuButton,
    Stack,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ToggleThemeButton from './toggleThemeButton'

const LinkItem = ({ route, href, children, target = "_" }) => {

    const active = route == href
    const inActiveColor = useColorModeValue('grey', 'whiteAlpha.900')
    return(
        <NextLink href = {href} passHref scroll = {false}>
            <Link
                height = "60px"
                fontFamily = "M PLUS Rounded 1c"
                width = "120px"
                fontSize = "20px"
                borderRadius = "5px"
                css = {{ display: 'flex', alignItems: "center", justifyContent: "center" }}
                bg = {active ? '#BF616A' : undefined}
                color = {active ? "#202023" : inActiveColor}
            >
                {
                    active ? <b>{children}</b> : children
                }
            </Link>
        </NextLink>
    )
}

const NavBar = ({ route }) => {
    return(
        <Box
             position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={3}
        >
            <Container
                display="flex"
        p={2}
        maxW="100%"
        wrap="wrap"
        align="center"
        justify="space-between"
            >
            <Stack
            align = "center"
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            justifyContent = "center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            >
            <LinkItem route = {route} href = "/" > Home </LinkItem>
                <LinkItem route = {route} href = "/works"> Works </LinkItem>
            <LinkItem route = {route} href = "/about"> About </LinkItem>
            </Stack>
            <Box flex = {1} align = "right">
            <ToggleThemeButton/>
                 <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                  style = {{ height: "50px", width: "50px" }}
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"

                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/Ranaco/portfolio_v2"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        </Container>
        </Box>
    )
}

export default NavBar
