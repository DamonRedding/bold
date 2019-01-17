import { Interpolation } from 'emotion'
import * as React from 'react'

import { focusBoxShadow, Theme, withStyles, WithStylesProps } from '../../../../styles'
import { Input, InputProps } from '../Input/Input'

import { InputWrapper, InputWrapperProps } from './InputWrapper'

export type InputStatus = 'error'

export interface TextInputProps extends WithStylesProps, InputProps,
    Pick<InputWrapperProps, 'icon' | 'iconPosition' | 'onIconClick'> {
    /**
     * Whether the input should show the clear icon button.
     */
    clearable?: boolean
    style?: Interpolation
    status?: InputStatus
}

export const createStyles = (theme: Theme) => ({
    input: {
        backgroundColor: theme.pallete.surface.main,
        border: 'solid 1px ' + theme.pallete.gray.c70,
        borderRadius: theme.radius.input,
        color: theme.pallete.text.main,
        lineHeight: '1rem',
        padding: 'calc(0.5rem - 1px) 0.5rem',
        width: '100%',
        transitionProperty: 'box-shadow',
        transitionDuration: '.2s',
        '::placeholder': {
            color: theme.pallete.text.disabled,
        },
        ':disabled': {
            borderColor: theme.pallete.gray.c80,
            backgroundColor: theme.pallete.surface.background,
        },
        ':not(:disabled):hover': {
            borderColor: theme.pallete.gray.c60,
        },
        ':not(:disabled):focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme),
        },
        ':not(:disabled):active': {
            borderColor: theme.pallete.primary.main,
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
        },
    },
    error: {
        border: 'solid 1px ' + theme.pallete.status.danger.main,
        ':not(:disabled):focus': {
            border: 'solid 1px ' + theme.pallete.gray.c80,
            boxShadow: focusBoxShadow(theme, 'danger'),
        },
    },
})

@withStyles
export class TextInput extends React.Component<TextInputProps> {

    static defaultProps: Partial<TextInputProps> = {
        type: 'text',
        clearable: true,
    }

    render() {
        const {
            css, status, theme, style,
            icon, iconPosition, onIconClick, clearable,
            ...rest
        } = this.props
        const styles = createStyles(theme)

        const classes = css(styles.input,
            status === 'error' && styles.error,
            style
        )

        return (
            <InputWrapper
                icon={icon}
                iconPosition={iconPosition}
                onIconClick={onIconClick}
                clearVisible={clearable && this.isClearVisible()}
                onClear={this.handleClear}
            >
                <Input
                    {...rest}
                    className={classes}
                />
            </InputWrapper>
        )
    }

    isClearVisible = (): boolean =>
        !this.props.disabled && (!!this.props.value || !!this.props.defaultValue)

    handleClear = () => {
        this.props.onChange && this.props.onChange(null)
    }

}
