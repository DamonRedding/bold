import * as React from 'react'

import { Omit } from '../../../../util'

import { SelectMulti, SelectMultiProps } from './SelectMulti/SelectMulti'
import { DefaultItemType, SelectSingle, SelectSingleProps } from './SelectSingle/SelectSingle'

export interface SelectProps<T = DefaultItemType> extends Omit<SelectSingleProps<T>, 'value'> {
    value?: T | T[]
    multiple?: boolean
    isEqual?: SelectMultiProps<T>['isEqual']
    onChange?(item: T | T[]): void
}

export class Select<T = DefaultItemType> extends React.Component<SelectProps<T>> {
    render() {
        const { multiple, onChange, value, isEqual, ...rest } = this.props
        let checkedValue = value

        if (multiple && value && !Array.isArray(value)) {
            if (process.env.NODE_ENV !== 'production') {
                // tslint:disable-next-line no-console
                console.warn(`Trying to set an object as value for <Select multiple /> but it should be an array`)
            }
            checkedValue = value ? [value] : []
        }

        if (!multiple && value && Array.isArray(value)) {
            if (process.env.NODE_ENV !== 'production') {
                // tslint:disable-next-line no-console
                console.warn(
                    `Trying to set an array as value for <Select /> but it should be an object.`
                    + ` Set the 'multiple' prop if it can have multiple values`
                )
            }
            checkedValue = value[0]
        }

        if (multiple) {
            return (
                <SelectMulti<T>
                    {...rest}
                    value={checkedValue as T[]}
                    onChange={onChange}
                    isEqual={isEqual}
                />
            )
        } else {
            return (
                <SelectSingle<T>
                    {...rest}
                    value={checkedValue as T}
                    onChange={onChange}
                />
            )
        }
    }
}
