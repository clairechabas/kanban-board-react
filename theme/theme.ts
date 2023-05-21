import { extendTheme } from '@chakra-ui/react'
import '@fontsource/plus-jakarta-sans'
import Button from './button'
import Switch from './switch'

const theme = extendTheme({
  colors: {
    purple: {
      25: '#EFEFF9',
      50: '#d8d7f1',
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
    body: '"Plus Jakarta Sans", sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.100',
      },
      ul: {
        listStyle: 'none',
      },
    }),
  },
  components: {
    Switch,
    Button,
  },
})

export default theme
