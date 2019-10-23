import { combineReducers } from 'redux'
import Auth from './auth'

const appReducer = combineReducers({
  auth: Auth,
})

const reducer = (state, action) => {
  if (action.type === 'APP_USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
export default reducer
