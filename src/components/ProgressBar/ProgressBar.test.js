import React from 'react'
import { create } from 'react-test-renderer'
import ProgressBar from '.'

test('renders correctly when empty', () => {
  const component = create(<ProgressBar />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders the correct content for the initial stage', () => {
  const component = create(<ProgressBar appStage={0} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders the correct content for the second stage', () => {
  const component = create(<ProgressBar appStage={1} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders the correct content for the third stage', () => {
  const component = create(<ProgressBar appStage={2} />)
  expect(component.toJSON()).toMatchSnapshot()
})
