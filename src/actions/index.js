import {
  SUBMIT_NEW_USER_FORM,
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

export const submitNewUserForm = formFields => ({ type: SUBMIT_NEW_USER_FORM, formFields })
export const submitPrivacyForm = formFields => ({ type: SUBMIT_PRIVACY_FORM, formFields })

// export const deleteCountdown = (id) => ({
//   type: DELETE_COUNTDOWN,
//   payload: id
// })
//
// export const setEditingCountdown = ({ id, name, date, logo, background }) => ({
//   type: SET_CURRENT_EDITING_COUNTDOWN,
//   payload: { id, name, date, logo, background }
// })
//
// export const updateCountdown = (id, { name, date, logo, background }) => ({
//   type: UPDATE_COUNTDOWN,
//   payload: { id, options: { name, date, logo, background } }
// })
//
// export const createCountdown = ({ name, date, type, routeName }) => (dispatch) => {
//   dispatch({
//     type: CREATE_COUNTDOWN,
//     payload: { name, date: date, logo: 'Sandcastle', background: 'TorontoNight', type }
//   })
//   dispatch({
//     type: NAVIGATE,
//     payload: { routeName }
//   })
// }
//
// export const resetCountdowns = () => ({
//   type: RESET_COUNTDOWNS
// })
//
// export const setCountdownType = (type) => ({
//   type: SET_COUNTDOWN_TYPE,
//   payload: type
// })
//
// export const setDate = (date) => ({
//   type: SET_DATE,
//   payload: date
// })
//
// export const setCurrentCountdownId = (id) => ({
//   type: SET_CURRENT_COUNTDOWN_ID,
//   payload: id
// })
//
// export const setIsEditing = (editing) => (dispatch) => {
//   dispatch(hideAllEditors())
//   dispatch({
//   type: SET_IS_EDITING,
//   payload: editing
//   })
// }
//
// export const showLogoEditor = () => (dispatch) => {
//   dispatch(hideAllEditors())
//   dispatch({type: SHOW_LOGO_EDITOR})
// }
//
// export const hideLogoEditor = () => ({
//   type: HIDE_LOGO_EDITOR
// })
//
// export const showDateTimeEditor = () => (dispatch) => {
//   dispatch(hideAllEditors())
//   dispatch({ type: SHOW_DATETIME_EDITOR })
// }
//
// export const hideDateTimeEditor = () => ({
//   type: HIDE_DATETIME_EDITOR
// })
//
// export const showBackgroundEditor = () => (dispatch) => {
//   dispatch(hideAllEditors())
//   dispatch({ type: SHOW_BACKGROUND_EDITOR })
// }
//
// export const hideBackgroundEditor = () => ({
//   type: HIDE_BACKGROUND_EDITOR
// })
//
// export const hideAllEditors = () => ({
//   type: HIDE_ALL_EDITORS
// })
