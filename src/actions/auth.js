import AsyncStorage from '@react-native-community/async-storage'
import { STORE_USER_INFO,IS_LOGIN,TOTAL_CART_PRODUCT } from '../constants/AppConstants'

  export const checkUserAuthentication = () => async dispatch => {
    try {
      let isLOGINValue = await AsyncStorage.getItem(IS_LOGIN)
      if(isLOGINValue === null){
        await AsyncStorage.setItem(IS_LOGIN,"false")
        isLOGINValue = false
      }
      if(isLOGINValue === "true"){
        let user = await AsyncStorage.getItem(STORE_USER_INFO)
        dispatch({
          type: 'social_login_success',
          payload: JSON.parse(user)
        })
        dispatch({
          type: 'check_user_authentication',
          payload: true
        })
      }else{
        dispatch({
          type: 'social_login_success',
          payload: {}
        })
        dispatch({
          type: 'check_user_authentication',
          payload: false
        })
      }
      
    } catch ({ response }) {
    }
  }

  export const logOut = () => async dispatch => {
    try {
      await AsyncStorage.setItem(IS_LOGIN,"false")
      await AsyncStorage.setItem(TOTAL_CART_PRODUCT, "0")
      await AsyncStorage.setItem(STORE_USER_INFO, "undefined")
      dispatch({
        type: 'check_user_authentication',
        payload: false
      })
    } catch ({ response }) {
    }
  }

 
  
