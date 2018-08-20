import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import normalizeCss from 'normalize.css'
import * as React from 'react'
import * as reactDatePicker from 'react-datepicker/dist/react-datepicker.css'

import { createTheme, Theme } from './createTheme'
import { CssGlobal } from './CssGlobal'

export interface ThemeProviderProps {
    theme?: Theme
}

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {

    static defaultProps: Partial<ThemeProviderProps> = {
        theme: createTheme(),
    }

    render() {
        return (
            <EmotionThemeProvider theme={this.props.theme}>
                <>
                    <CssGlobal styles={normalizeCss} />
                    <CssGlobal styles={reactDatePicker} />
                    <CssGlobal styles={this.props.theme.global} />

                    {this.props.children}
                </>
            </EmotionThemeProvider>
        )
    }
}