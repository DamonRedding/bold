import 'react-select/dist/react-select.css'

import { Theme } from '../../../styles'

const createSelectStyle = (theme: Theme) => {
    const height = 'calc(2rem - 2px)'
    return {
        default: {
            fontSize: '0.75rem',
            '.Select-control': {
                backgroundColor: theme.color.white,
                border: 'solid 1px ' + theme.color.gray80,
                borderRadius: theme.baseRadius,
                color: theme.color.gray30,
                height,
                lineHeight: '1rem',
                ':hover': {
                    borderColor: theme.color.gray60,
                    boxShadow: 'none',
                },
                '.Select-clear-zone': {
                    paddingRight: '0.5rem',
                    ':hover': {
                        color: theme.color.primary,
                    },
                    '.Select-clear': {
                        fontSize: '1.5rem',
                        lineHeight: '1.5rem',
                    },
                },
                '.Select-placeholder, .Select-value': {
                    padding: '0 1rem',
                    lineHeight: height,
                },
                '.Select-value-label': {
                    color: theme.color.gray30 + ' !important',
                },
                '.Select-input': {
                    height,
                    padding: '0 1rem',
                    'input': {
                        lineHeight: '1rem',
                        padding: '0.4rem 0',
                    },
                },
                '.Select-arrow-zone': {
                    backgroundColor: theme.color.background,
                    paddingRight: 0,
                    width: 30,
                },
                '.Select-menu-outer': {
                    fontSize: '1rem',
                },
            },
            '&.is-focused': {
                '.Select-control': {
                    borderColor: theme.color.primary,
                },
                '.Select-menu-outer': {
                    borderColor: theme.color.primary,
                    borderRadius: theme.baseRadius,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                },
            },
            '&.is-focused:not(.is-opened)': {
                '.Select-control': {
                    boxShadow: 'none',
                },
            },
        },
        error: {
            '.Select-control': {
                borderColor: theme.color.red,
            },
        },
    }
}

export default createSelectStyle