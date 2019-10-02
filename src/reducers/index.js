import { combineReducers } from 'redux'
import Auth from './auth'
import Price from './price'
import Catlog from './catlog'

const appReducer = combineReducers({
  auth: Auth,
  price: Price,
  catlog: Catlog
})

const reducer = (state, action) => {
  if (action.type === 'APP_USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
export default reducer
