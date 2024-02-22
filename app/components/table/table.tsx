import * as stylex from '@stylexjs/stylex'
import type { ReactNode } from 'react'

interface Props {
  style?: stylex.StyleXStyles
  children: ReactNode
}

const baseStyles = stylex.create({
  base: {
    width: '100%',
    textAlign: 'center'
  },
})


export default function Table({ style, children }: Props) {
  return (
    < table {...stylex.props(baseStyles.base, style)
    }>
      {children}
    </table>
  )
}
