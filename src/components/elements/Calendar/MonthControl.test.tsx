import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { MonthControl } from './MonthControl'

it('should render correctly', () => {
  const { container } = render(<MonthControl visibleDate={new Date('2018-10-26')} onChange={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

it('should call onChange function with next month when clicked on next button', () => {
  const change = jest.fn()
  const { getByTitle } = render(<MonthControl visibleDate={new Date('2018-10-26')} onChange={change} />)
  const nextButton = getByTitle('Next month')

  expect(change).not.toHaveBeenCalled()
  fireEvent.click(nextButton)
  expect(change).toHaveBeenCalledWith(new Date('2018-11-26'))
})

it('should call onChange function with previous month when clicked on prev button', () => {
  const change = jest.fn()
  const { getByTitle } = render(<MonthControl visibleDate={new Date('2018-10-26')} onChange={change} />)
  const prevButton = getByTitle('Previous month')

  expect(change).not.toHaveBeenCalled()
  fireEvent.click(prevButton)
  expect(change).toHaveBeenCalledWith(new Date('2018-09-26'))
})
