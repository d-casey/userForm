import React from 'react'
import Main from '.'
import { Provider } from 'react-redux'

import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([])

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

const getWrapper = (state) => {
  store = mockStore(state)
  component = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

describe('<Main /> container', () => {
  describe('When the app stage is 0', () => {
    beforeEach(() => {
      getWrapper(initialState)
    })

    it('passes the state into the sidebar and progress bar', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('When the app stage is 1', () => {
    beforeEach(() => {
      let updatedState = initialState
      updatedState.app.stage = 1
      getWrapper(updatedState)
    })

    it('should render the correct sidebar and progress bar content', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('When the app stage is 2', () => {
    beforeEach(() => {
      let updatedState = initialState
      updatedState.app.stage = 2
      getWrapper(updatedState)
    })

    it('should render the correct sidebar and progress bar content', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
