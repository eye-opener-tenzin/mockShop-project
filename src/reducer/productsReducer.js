import {
POPULATE_PRODUCTS_REQUEST,
POPULATE_PRODUCTS_SUCCESS,
POPULATE_PRODUCTS_ERROR
} from '../action/productsAction'

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const reducer = (state = initialState, action)  => {
    switch (action.type) {
        case POPULATE_PRODUCTS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case POPULATE_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case POPULATE_PRODUCTS_ERROR: 
            return {
                loading: false,
                products: [],
                error: action.payload
            }
            default: return state

    }
}
export default reducer;