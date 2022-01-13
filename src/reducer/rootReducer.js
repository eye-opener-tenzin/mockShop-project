import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import appReducer from '../reducer/appReducer';
import cartReducer from '../reducer/cartReducer';

export default combineReducers({
    products: productsReducer,
    category: appReducer,
    cart: cartReducer,
})