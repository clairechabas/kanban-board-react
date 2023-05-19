import { extendTheme } from '@chakra-ui/react'
import '@fontsource/barlow/300.css'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/700.css'

const theme = extendTheme({
  fonts: {
    body: 'Barlow, sans-serif',
  },
})

export default theme
