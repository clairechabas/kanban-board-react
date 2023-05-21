type ButtonProps = {
  colorMode?: string
  size?: string
  variant?: string
  disabled?: boolean
}

const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '25px',
  },
  sizes: {
    sm: {
      fontSize: '13px',
      py: '8px',
      px: '18px',
    },
    lg: {
      fontSize: '15px',
      py: '15px',
      px: '25px',
    },
  },
  variants: {
    primary: (props: ButtonProps) => ({
      bg: props.disabled ? 'purple.50' : 'purple.200',
      color: 'white',
      _hover: {
        bg: props.disabled ? 'purple.50' : 'purple.100',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
      },
    }),
    secondary: (props: ButtonProps) => ({
      bg: props.colorMode === 'dark' ? 'white' : 'purple.25',
      color: 'purple.200',
      _hover: {
        bg: props.colorMode === 'dark' ? 'white' : 'purple.50',
      },
    }),
    destructive: {
      bg: 'red.200',
      color: 'white',
      _hover: {
        bg: 'red.100',
      },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary',
  },
}

export default Button
