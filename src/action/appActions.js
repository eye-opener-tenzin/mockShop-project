export const SHOW_PRODUCTS = 'SHOW_PRODUCTS'
export const HIDE_PRODUCTS = 'HIDE_PRODUCTS'


export const productsListShow = (showProducstList) => {
    return {
        type: SHOW_PRODUCTS,
        payload: showProducstList
    }
}

export const productsListHide = ( hideProductsList ) => {
    return {
        type: HIDE_PRODUCTS,
        payload: hideProductsList
    }
}

export const fetchProductsList = ({products}) => {
    return (dispatch) => {
        fetch(products)
            .then(response => {
                const productsList = response.data
                dispatch(productsListShow(productsList))
        })
    }
}