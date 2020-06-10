import React from 'react'
import { create } from 'react-test-renderer'
import PageNotFound from '.'

describe('<PageNotFound /> container', () => {
  const component = create(
    <PageNotFound />
  )
  it('renders the correct content', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
