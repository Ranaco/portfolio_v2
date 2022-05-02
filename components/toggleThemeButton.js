import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <motion.div
      style={{ display: 'inline-block' }}
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconButton
        height="50px"
        width="50px"
        icon={useColorModeValue(
          <MoonIcon height="30px" width="30px" />,
          <SunIcon height="30px" width="30px" />
        )}
        onClick={toggleColorMode}
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
      />
    </motion.div>
  )
}

export default ToggleThemeButton
