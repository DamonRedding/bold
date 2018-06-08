import * as React from 'react'

import { Text } from '../elements/textual/Text/Text'
import { Spacing } from '../layout/Spacing/Spacing'

export interface FormLabelProps {
    label?: React.ReactNode
    required?: boolean
}

export class FormLabel extends React.Component<FormLabelProps> {

    render() {
        const fieldRequired = (
            this.props.required && (
                <Spacing left={0.25}>
                    <Text tag='label' color='danger' size={0.75} weight='bold'>
                        <span aria-label='Campo obrigatório'>&#42;</span>
                    </Text>
                </Spacing>
            )
        )

        return (
            <>
                <Text tag='label' size={0.75} weight='bold'>{this.props.label}</Text>
                {fieldRequired}
            </>
        )
    }

}
