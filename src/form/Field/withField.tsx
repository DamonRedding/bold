import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'

import { InputStatus } from '../../components/TextInput'

import { Field, FieldProps, FieldRenderProps } from './Field'
import { BaseFieldProps, extractInputProps } from './index'

export interface BaseInputProps {
  name?: string
  status?: InputStatus
}

export function withField<T, P extends BaseInputProps>(
  InputComponent: React.ComponentType<P>,
  fieldProps: Partial<FieldProps<T>> = {}
) {
  const WithField = class extends React.Component<BaseFieldProps<P, T>> {
    static displayName = `Field(${InputComponent.displayName || InputComponent.name})`

    render() {
      return <Field<T> {...this.props} render={this.renderInput} {...fieldProps} />
    }

    renderInput = (props: FieldRenderProps) => {
      const Inpt = InputComponent as any
      return <Inpt status={props.hasError ? 'error' : undefined} {...extractInputProps(this.props)} {...props.input} />
    }
  }
  hoistNonReactStatics(WithField, InputComponent)
  return WithField
}
