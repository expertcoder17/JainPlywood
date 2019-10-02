
const INITIAL_AUTH_STATE = {
  loading: false,
  loading_message: '',
  user: {},
  authentication: false,
  error: ''
}

export default (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case 'social_login_loading':
      return { ...state, loading: true, loading_message: "Loading..."}
    case 'social_login_success':
      return { ...state, loading: false, loading_message: '',user: action.payload}
    case 'social_login_failed':
        return { ...state, loading: false, loading_message: '',user: {}}   
    case 'check_user_authentication':
        const random_number = 1 + Math.random() * (100 - 1);
        return { ...state, authentication: action.payload,number: random_number}
    default:
      return state
  }
}
