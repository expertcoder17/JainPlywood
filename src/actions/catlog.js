
import axios from 'axios'
import {
    GET_CATALOGUE_LIST
} from '../constants/ApiConstants'


export const getCatlogList = cat_id => async dispatch => {
  try {
    dispatch({
      type: 'catlog_loading_start'
    })
    const { data } = await axios.get('https://salestrackapidev.azurewebsites.net/api/ProductCategory/GetCategoryList?CompCode=Bran')
    dispatch({
      type: 'catlog_loaded_success',
      payload: data
    })
  } catch ({ response }) {
    dispatch({
      type: 'catlog_loaded_failed'
    })
  }
}
  

  
