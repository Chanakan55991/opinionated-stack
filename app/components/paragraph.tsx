import * as stylex from '@stylexjs/stylex'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const styles = stylex.create({
  base: {
    textJustify: 'distribute'
  }
})

export default function Par({ children }: Props) {

  return (
    <p {...stylex.props(styles.base)}>{children}</p>
  )
}
