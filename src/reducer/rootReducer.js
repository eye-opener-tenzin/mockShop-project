import { combineReducers } from 'redux';
import productReducer  from './productsReducer'

const rootReducer = combineReducers({
    product: productReducer
})

export default rootReducer;