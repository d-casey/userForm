import React from 'react'
import { create } from 'react-test-renderer'
import Header from '.'

test('renders correctly', () => {
  const component = create(<Header />)
  expect(component.toJSON()).toMatchSnapshot()
})
