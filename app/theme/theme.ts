import { extendTheme } from '@chakra-ui/react'
import '@fontsource/barlow/300.css'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/700.css'

const theme = extendTheme({
  colors: {
    purple: {
      100: '#A8A4FF',
      200: '#635FC7',
    },
    black: '#000112',
    gray: {
      100: '#F4F7FD',
      200: '#E4EBFA',
      300: '#828FA3',
      400: '#3E3F4E',
      500: '#2B2C37',
      600: '#20212C',
    },
    red: {
      100: '#FF9898',
      200: '#EA5555',
    },
    white: '#FFFFFF',
  },
  fonts: {
    body: 'Barlow, sans-serif',
  },
})

export default theme
