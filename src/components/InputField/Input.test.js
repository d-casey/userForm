import React from 'react'
import { create } from 'react-test-renderer'
import InputField from '.'

test('renders correctly when passed all details', () => {
  const register = jest.fn()
  const component = create(
    <InputField
      type={'text'}
      label={'name'}
      name={'name'}
      required={true}
      register={register}
      validation={{}}
      error={'error'}
      defaultValue={'Severus Snape'}
    />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
