import {combineReducers} from 'redux'
import { cartData } from './reducer'
import { catData } from './catreducer'
import { idData } from './idreducer'
export default combineReducers({
    cartData,
    idData,
    catData,
})