const populateProducts = products => ({
    type: 'POPULATE_PRODUCTS',
    payload: products
});

export const getProducts = () => dispatch => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => {
            dispatch(populateProducts(json))
        });
};

