export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SELECTED_PRODUCT_ID = "SELECTED_PRODUCT_ID"

const populateProducts = products => ({
    type: 'SET_PRODUCTS',
    payload: products
});
export const selectedProductById = selectedProductById => ({
    type: 'SELECTED_PRODUCT_ID',
    payload: selectedProductById
});



export const getProducts = () => dispatch => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => {
            dispatch(populateProducts(json))
        });
};
