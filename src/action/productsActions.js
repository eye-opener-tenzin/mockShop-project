import { MOCK_DATA } from '../components/MOCK_DATA'
export const SET_PRODUCTS = 'SET_PRODUCTS'


export const populateProducts = products => ({
    type: 'SET_PRODUCTS',
    payload: products
});

export const getProducts = () => dispatch => {
   
    dispatch(populateProducts(MOCK_DATA))
};
