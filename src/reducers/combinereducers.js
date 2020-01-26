import { combineReducers } from 'redux'
import loggedin from './loggedin'
import postReducer from './postReducer'
import cartReducer from './cart'

export default combineReducers({
  loggedin : loggedin,
  posted : postReducer,
  cart : cartReducer
})