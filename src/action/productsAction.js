import axios from 'axios'
import {
    POPULATE_PRODUCTS_REQUEST,
    POPULATE_PRODUCTS_SUCCESS,
    POPULATE_PRODUCTS_ERROR
} from '../components/productTypes'


export const populateProductsRequest = () => {
    return {
        type: POPULATE_PRODUCTS_REQUEST
    }
}

export const populateProductsSuccess = products => {
    return {
        type: POPULATE_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const populateProductsError = error => {
    return {
        type: POPULATE_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(populateProductsRequest)
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const products = response.data
            dispatch(populateProductsSuccess(products))
        })
        .catch(error => {
            dispatch(populateProductsError(error.message))
        })
    }
}

