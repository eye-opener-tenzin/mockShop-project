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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULATE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POPULATE_PRODUCTS_SUCCESS:
            const groupingCategory = action.payload.reduce((result, title) => {
                result[title.category] ? result[title.category].push(title) : result[title.category] = [title];
                return result;
            }, {});
            console.log(groupingCategory);
            return {
                loading: false,
                products: groupingCategory,
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