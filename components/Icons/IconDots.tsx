import { Icon } from '@chakra-ui/react'
import { IconProps } from './Icons.types'

const IconDots: React.FC<IconProps> = ({ w = 5, h = 20 }) => {
  return (
    <Icon
      width={`${w}px`}
      height={`${h}px`}
      viewBox={`0 0 ${w} ${h}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.30769" cy="2.30769" r="2.30769" fill="currentColor" />
      <circle cx="2.30769" cy="10" r="2.30769" fill="currentColor" />
      <circle cx="2.30769" cy="17.6923" r="2.30769" fill="currentColor" />
    </Icon>
  )
}

export default IconDots
