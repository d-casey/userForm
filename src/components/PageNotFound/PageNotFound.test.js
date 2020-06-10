import React from 'react'
import { createStore } from 'redux'
import { render, fireEvent, screen } from '../../testUtils'
import '@testing-library/jest-dom/extend-expect'
import PageNotFound from '.'

test('<PageNotFound /> container', () => {
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

  render(<PageNotFound />, { store })
  expect(screen.getByTestId('not-found-text')).toHaveTextContent('That page was not found')
})
