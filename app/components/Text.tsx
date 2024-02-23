import * as stylex from '@stylexjs/stylex'
import { ReactNode } from 'react'
import { tokens } from '~/designs/tokens.stylex'

interface Props {
  children: ReactNode
}

const styles = stylex.create({
  base: {

    color: tokens.primaryText
  },
  par: {
    textJustify: 'inter-character',
    textAlign: 'justify',
  }
})

export function Par({ children }: Props) {
  return (
    <p {...stylex.props(styles.base, styles.par)}>{children}</p>
  )
}

export function Title({ children }: Props) {
  return (
    <h1 {...stylex.props(styles.base)}>{children}</h1>
  )
}
