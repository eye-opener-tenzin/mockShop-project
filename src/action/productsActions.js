export const SET_PRODUCTS = 'SET_PRODUCTS'


export const populateProducts = products => ({
    type: 'SET_PRODUCTS',
    payload: products
});

export const getProducts = () => dispatch => {
    console.log('fetch')
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => {
            console.log('json', json)
            dispatch(populateProducts(json))
        });
};
