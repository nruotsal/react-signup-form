import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

type LoadingSpinnerProps = {
  size: number
}

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`

export default styled('div')<LoadingSpinnerProps>`
  animation: ${rotate} 1s linear infinite;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  border-top: 2px #747474 solid;
  transform-origin: ${props => `${props.size / 2}px ${props.size / 2}px`};
  margin: 16px auto;
`
