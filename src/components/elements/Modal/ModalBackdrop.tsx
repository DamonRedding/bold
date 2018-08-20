import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export interface ModalBackdropProps extends WithStylesProps {
    onClick(): any
}

@withStyles
export class ModalBackdrop extends React.PureComponent<ModalBackdropProps> {

    render() {
        const { css, theme, onClick } = this.props
        const styles: Styles = {
            backdrop: {
                position: 'fixed',
                zIndex: theme.zIndex.modalBackdrop,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: 'rgba(230, 230, 230, 0.7)',
            },
        }
        return (
            <div className={css(styles.backdrop)} onClick={onClick} />
        )
    }
}