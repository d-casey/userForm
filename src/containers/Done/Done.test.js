import React from 'react'
import { createStore } from 'redux'
import { render, screen } from '../../testUtils'
import '@testing-library/jest-dom/extend-expect'
import Done from '.'

test('Rendering the simple done container', () => {
  const store = createStore(() => ({
    app: {
      stage: 0,
      formCompleted: true
    },
    newUserForm: {
      name: '',
      role: '',
      email: '',
      password: '',
      isSubmitted: false
    },
    privacyForm : {
      isSubmitted: false,
      receive_updates: true,
      receive_communication: false,
    }
  }))

  render(<Done />, { store })
  expect(screen.getByTestId('success-text')).toHaveTextContent('Please verify your email address, you should have received an email from us already!')
})
