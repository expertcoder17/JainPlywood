import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { Alert, Platform, Linking } from 'react-native'
import {
    GET_PRICE_LIST
} from '../constants/ApiConstants'


export const getPriceList = city_id => async dispatch => {
    try {
      dispatch({
        type: 'price_loading_start'
      })
      const { data } = await axios.get("https://salestrackapidev.azurewebsites.net/api/ProductCategory/GetCategoryList?CompCode=Bran")
      dispatch({
        type: 'price_loaded_success',
        payload: data
      })
    } catch ({ response }) {
      dispatch({
        type: 'price_loaded_failed'
      })
    }
  }
  

  
