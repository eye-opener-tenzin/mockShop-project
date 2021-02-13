import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import appReducer from '../reducer/appReducer';

export default combineReducers({
    products: productsReducer,
    category: appReducer
})