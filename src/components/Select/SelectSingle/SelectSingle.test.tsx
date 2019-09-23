import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import * as stringUtils from '../../../util/string'

import { DefaultItemType, SelectSingle, SelectSingleProps } from './SelectSingle'

const stringUtilsModule = stringUtils as any
stringUtilsModule.randomStr = jest.fn(() => 'abc')

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

// tslint:disable jsx-no-lambda
function SelectTest(props: Partial<SelectSingleProps>) {
  return <SelectSingle items={items} itemToString={item => item.label} placeholder='Select a value...' {...props} />
}

it('should render correctly when closed', () => {
  const { container } = render(<SelectTest />)
  expect(container).toMatchSnapshot()
})

it('should render correctly when opened', () => {
  const { container } = render(<SelectTest isOpen={true} />)
  expect(container).toMatchSnapshot()
})

it('should accept value prop', () => {
  const { container } = render(<SelectTest value={items[4]} />)
  expect(container.querySelector('input').value).toEqual(items[4].label)
})

it('should open the select menu when input is focused', () => {
  const { container } = render(<SelectTest />)
  expect(container.querySelector('ul')).toBeFalsy()
  fireEvent.focus(container.querySelector('input'))
  expect(container.querySelector('ul')).toBeTruthy()
})

it('should call the onChange event when an item is clicked', () => {
  const onChange = jest.fn()
  const { getByText } = render(<SelectTest onChange={onChange} isOpen={true} />)
  expect(onChange).not.toHaveBeenCalled()
  fireEvent.click(getByText(items[2].label))
  expect(onChange).toHaveBeenLastCalledWith(items[2], expect.anything())
})

it('should render current value and allow changes via prop', () => {
  const { container, rerender } = render(<SelectTest />)
  const input = container.querySelector('input')
  expect(input.value).toEqual('')
  rerender(<SelectTest value={{ value: 42, label: 'Foo' }} />)
  expect(input.value).toEqual('Foo')
})

describe('clear button', () => {
  it('should clear the input value', () => {
    const { container, getByTitle } = render(<SelectTest value={items[0]} />)
    const input = container.querySelector('input')
    const clearButton = getByTitle('Clear')

    expect(input.value).toEqual(items[0].label)

    fireEvent.click(clearButton)

    expect(input.value).toEqual('')
  })
  it('should call onChange with null value', () => {
    const onChange = jest.fn()
    const { getByTitle } = render(<SelectTest onChange={onChange} value={items[0]} />)
    const clearButton = getByTitle('Clear')

    expect(onChange).not.toHaveBeenCalled()
    fireEvent.click(clearButton)
    expect(onChange).toHaveBeenLastCalledWith(null, expect.anything())
  })
  it('should call prop onClear if exists', () => {
    const onClear = jest.fn()
    const { getByTitle } = render(<SelectTest onClear={onClear} value={items[0]} />)
    const clearButton = getByTitle('Clear')

    expect(onClear).not.toHaveBeenCalled()
    fireEvent.click(clearButton)
    expect(onClear).toHaveBeenCalled()
  })
})

describe('error', () => {
  it('should render the error text', () => {
    const { queryByText } = render(<SelectTest error='Some error' />)
    expect(queryByText('Some error')).toBeTruthy()
  })

  it('input should have an "aria-invalid=true" attribute when "error" is provided', () => {
    const { container } = render(<SelectTest error='Some error' />)
    expect(container.querySelector('input').getAttribute('aria-invalid')).toEqual('true')
  })

  it('input should have an "aria-errormessage" attribute when "error" is provided', () => {
    const { container } = render(<SelectTest error='Some error' />)
    expect(container.querySelector('input').getAttribute('aria-errormessage')).toEqual('error-abc')
    expect(container.querySelector('#error-abc').textContent).toEqual('Some error')
  })
})

describe('input label', () => {
  it('label should have a htmlFor prop equals to the used id', () => {
    const { container } = render(<SelectTest id='foo' label='Foo' />)

    expect(container.querySelector('label').getAttribute('for')).toEqual('foo')
    expect(container).toMatchSnapshot()
  })

  it('should use aria-labelledby equals to an auto-assigned label id, if "id" is not provided', () => {
    const { container } = render(<SelectTest label='test' />)

    expect(container.querySelector('label').getAttribute('id')).toEqual('label-abc')
    expect(container.querySelector('input').getAttribute('aria-labelledby')).toEqual('label-abc')
    expect(container).toMatchSnapshot()
  })

  it('should not have aria description if "label" prop is not provided', () => {
    const { container } = render(<SelectTest />)
    expect(container.querySelector('input').getAttribute('aria-labelledby')).toBeFalsy()
  })
})