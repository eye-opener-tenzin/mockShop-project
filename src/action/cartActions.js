export const TOGGLING_CART = 'TOGGLING_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADJUST_QUANTITY = 'ADJUST_QUANTITY';
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM'


export const isCartToggle = () => ({
    type: TOGGLING_CART,
    
})

export const addToCart = (itemID) => ({
    type: 'ADD_TO_CART',
    payload: {
        id: itemID
    }
})

export const removeFromCart = itemID => ({
    type: 'REMOVE_FROM_CART',
    payload: {
        id: itemID
    }
})

