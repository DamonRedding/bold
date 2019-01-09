import { css, Interpolation } from 'emotion'
import { withTheme } from 'emotion-theming'
import * as React from 'react'

import { Theme } from './theme/createTheme'

export interface WithStylesProps {
    theme?: Theme
    css?: (...styles: Interpolation[]) => string
}

export interface Styles {
    [key: string]: Interpolation
}

export function withStyles<P extends WithStylesProps, T extends React.ComponentType<P>>(
    WrappedComponent: T
): T {

    const Cmp = WrappedComponent as React.ComponentType<P>

    class WithStyles extends React.Component<P> {

        render() {
            return (
                <Cmp
                    {...this.props}
                    css={css}
                />
            )
        }
    }

    const withThemeComponent = withTheme<P, Theme>(WithStyles)
    withThemeComponent.displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

    return withThemeComponent as any as T
}
