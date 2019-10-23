
const INITIAL_AUTH_STATE = {
  loading: false,
  loading_message: '',
  user: {},
  authentication: 'false',
  login_city: '',
  error: ''
}

export default (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
   case 'check_user_authentication':
        return { ...state, authentication: action.payload,login_city: action.city}
    default:
      return state
  }
}
