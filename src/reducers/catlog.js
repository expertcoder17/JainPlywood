const INITIAL_CATLOG_STATE = {
    loading: false,
    loading_message: '',
    catlogList: [],
    error: ''
  }
  
  export default (state = INITIAL_CATLOG_STATE, action) => {
    switch (action.type) {
      case 'catlog_loading_start':
          return { ...state, loading_product: true, loading_message: '',}  
      case 'catlog_loaded_success':
          return { ...state, loading_product: false, loading_message: '',catlogList: action.payload}
      case 'catlog_loaded_failed':
          return { ...state, loading_product: false, loading_message: '',error: ''}  
      default:
        return state
    }
  }