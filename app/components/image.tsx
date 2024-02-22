import * as stylex from '@stylexjs/stylex'

interface Props {
  src: string,
  alt?: string,
  variant?: 'contain' | 'cover'
}

const styles = stylex.create({
  contain: {
    width: '100%',
    borderRadius: 16
  },
  cover: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: 16
  }
})

export default function Image({ src, alt, variant = 'contain' }: Props) {

  return (
    <img src={src} alt={alt} {...stylex.props(styles[variant])} />
  )
}
