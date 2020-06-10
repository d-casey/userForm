import React from 'react'
import { create } from 'react-test-renderer'
import CheckboxField from '.'

test('renders correctly when passed all details', () => {
  const register = jest.fn()
  const component = create(
    <CheckboxField
      name={'checkbox_1'}
      defaultChecked={true}
      message={'Would you like to hear from us?'}
      register={register}
    />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
