import { PAGES } from '../reducer/appReducer';

const initialState = {
    productsByCategory: {},
    productsById: {},

}

export default function productsReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            const productsByCategory = action.payload.reduce(
                (acc, product) => {
                    const category = product.category;
                    return {
                        ...acc,
                        [category]: [...(acc[category] || []), product]
                    };
                },
                {}
            );
            const productsById = action.payload.reduce(
                (result, products) => {
                    result[products.id] = products;
                    return result;
                    
            },
                {}
            );
            return {
                ...state,
                products: action.payload,
                productsByCategory,
                productsById 
                
            }
        case 'SELECTED_PRODUCT_ID':
            return {
                ...state,
                selectedProductById: action.payload,
                activePage: PAGES.PRODUCT
             
            }
        default:
            return state
    }
}