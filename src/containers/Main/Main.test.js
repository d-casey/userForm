import React from 'react'
import Main from '.'
import { Provider } from 'react-redux'

import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<Main /> container', () => {
  let store
  let component
  let initialState = {
    app: {
      stage: 0,
      formCompleted: true
    },
    newUserForm: {
      name: "",
      role: "",
      email: "",
      password: "",
      isSubmitted: false
    },
    privacyForm : {
      isSubmitted: false,
      receive_updates: true,
      receive_communication: false,
    }
  }

  describe('When the app stage is 0', () => {
    beforeEach(() => {
      store = mockStore(initialState)
      component = renderer.create(
        <Provider store={store}>
          <Main />
        </Provider>
      )
    })

    it('passes the state into the sidebar and progress bar', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('When the app stage is 1', () => {
    beforeEach(() => {
      initialState.app.stage = 1
      store = mockStore(initialState)
      component = renderer.create(
        <Provider store={store}>
          <Main />
        </Provider>
      )
    })

    it('should render the correct sidebar and progress bar content', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })

  })

  describe('When the app stage is 2', () => {
    beforeEach(() => {
      initialState.app.stage = 2
      store = mockStore(initialState)
      component = renderer.create(
        <Provider store={store}>
          <Main />
        </Provider>
      )
    })

    it('should render the correct sidebar and progress bar content', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
