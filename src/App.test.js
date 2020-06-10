import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore({})
let store
let component
let initialState = {
  app: {
    stage: 0,
    formCompleted: false
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
    receive_updates: false,
    receive_communication: false,
  }
}

const getWrapper = () => {
  store = mockStore(initialState)
  component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

describe('<App /> container', () => {
  beforeEach(() => {
    getWrapper()
  })

  it('renders the content as expected', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
