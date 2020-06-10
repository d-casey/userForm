import React from 'react'
import { create } from 'react-test-renderer'
import Sidebar from '.'

test('renders correctly when empty', () => {
  const component = create(<Sidebar />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders the correct content for the initial stage', () => {
  const component = create(<Sidebar appStage={0} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders the correct content for the second stage', () => {
  const component = create(<Sidebar appStage={1} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders the correct content for the third stage', () => {
  const component = create(<Sidebar appStage={2} />)
  expect(component.toJSON()).toMatchSnapshot()
})
