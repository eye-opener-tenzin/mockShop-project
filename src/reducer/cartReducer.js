import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADJUST_QUANTITY,
    LOAD_CURRENT_ITEM,
    TOGGLING_CART
} from "../action/cartActions"

const initialState = {
    isCartToggle: false,
    products: [],
    cart: [],
    currentItem: null
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLING_CART:
            return {
                ...state,
                isCartToggle: !state.isCartToggle,
            }
        case ADD_TO_CART:
           const item = state.products.find(product => product.id === action.payload.id);
            const isExistedItem = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: isExistedItem
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { item: item.title, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            }; 


        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.map(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

