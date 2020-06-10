import React from 'react'
import { create } from 'react-test-renderer'
import CheckboxList from '.'
import privacyForm from '../../config/privacyForm'

test('renders correctly when passed an array of checkbox data', () => {
  const register = jest.fn()
  const component = create(
    <CheckboxList
      checkboxData={privacyForm.checkboxData}
      register={register}
    />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
