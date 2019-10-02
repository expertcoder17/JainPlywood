const INITIAL_PRICE_STATE = {
    loading: false,
    loading_message: '',
    priceList: [],
    error: ''
  }
  
  export default (state = INITIAL_PRICE_STATE, action) => {
    switch (action.type) {
      case 'price_loading_start':
          return { ...state, loading_product: true, loading_message: '',}  
      case 'price_loaded_success':
          return { ...state, loading_product: false, loading_message: '',priceList: action.payload}
      case 'price_loaded_failed':
          return { ...state, loading_product: false, loading_message: '',error: ''}  
      default:
        return state
    }
  }