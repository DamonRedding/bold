import { FieldRenderProps } from 'react-final-form'

import { FieldProps } from './Field'

/**
 * Return the current field's active error.
 *
 * @param fieldProps The react-final-form field render props.
 */
export const getActiveError = (fieldMeta: FieldRenderProps['meta']): any => {
    return fieldMeta.touched && fieldMeta.error || !fieldMeta.dirtySinceLastSubmit && fieldMeta.submitError
}

/**
 * Return a boolean indicating if the field has a current active error.
 *
 * @param fieldProps The react-final-form field render props.
 */
export const hasActiveError = (fieldMeta: FieldRenderProps['meta']): boolean => {
    return !!getActiveError(fieldMeta)
}

/**
 * Type to be extended by component props which are a Field-based versions of input elements
 * This type exposes props from Field that must be public and overridables
 */
export type BaseFieldProps<T> = T & Pick<FieldProps,
    'name' | 'label' | 'hasWrapper' | 'parse' | 'format' | 'convert' | 'required' | 'validate'>

/**
 * Extract from a BaseFieldProps object only props that can be safely passed down to input elements
 * This functions removes the Field specific props made available by the usage of BaseFieldProps
 */
export function extractInputProps(fieldProps: BaseFieldProps<{}>) {
    const {
        label,
        hasWrapper,
        parse,
        format,
        convert,
        validate,
        ...rest
    } = fieldProps

    return rest
}
