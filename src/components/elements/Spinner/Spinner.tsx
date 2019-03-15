import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'

export interface SpinnerProps {
  size?: number
  borderWidth?: number
  style?: Interpolation
}

export const Spinner = (props: SpinnerProps) => {
  const { style } = props
  const { classes, css } = useStyles(createStyles, props)

  return <span className={css(classes.spinner, style)} />
}

Spinner.defaultProps = {
  size: 1,
  borderWidth: 2,
} as Partial<SpinnerProps>

export const createStyles = (theme: Theme, { size, borderWidth }: SpinnerProps) => ({
  spinner: {
    pointerEvents: 'none',
    fontSize: `${size}rem`,
    lineHeight: 1,
    ':after': {
      animation: `${theme.animation.spinAround} 450ms infinite linear`,
      border: `${borderWidth}px solid currentColor`,
      borderRadius: '50%',
      borderRightColor: 'transparent',
      content: '""',
      display: 'inline-block',
      height: `${size}rem`,
      width: `${size}rem`,
    },
  } as CSSProperties,
})
