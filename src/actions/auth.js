import AsyncStorage from '@react-native-community/async-storage'
import { IS_LOGIN , LOGIN_CITY} from '../constants/AppConstants'

  export const checkUserAuthentication = () => async dispatch => {
    try {
      let isLOGINValue = await AsyncStorage.getItem(IS_LOGIN)
      let LoginCity = await AsyncStorage.getItem(LOGIN_CITY)
      if(isLOGINValue === null){
        await AsyncStorage.setItem(IS_LOGIN,"false")
        isLOGINValue = 'false'
      }
      if(isLOGINValue === "true"){

        dispatch({
          type: 'check_user_authentication',
          payload: 'true',
          city: LoginCity
        })
      }else{
        dispatch({
          type: 'check_user_authentication',
          payload: 'false',
          city: ''
        })
      }
      
    } catch ({ response }) {
    }
  }
 
  
