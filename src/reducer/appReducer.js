import { SET_CATEGORY } from "../action/appActions"
import { SELECTED_PRODUCT_BY_ID } from "../action/appActions"
import { NAVIGATE_TO_HOME_PAGE } from "../action/appActions"
import { SEARCHBAR_INPUT } from "../action/appActions"
import { CLEAR_SEARCHBAR  } from "../action/appActions"
import { SEARCHBAR_RESULT } from "../action/appActions"

 
export const PAGES = {
    HOME: 'HOME',
    CATEGORY: 'CATEGORY',
    PRODUCT: 'PRODUCT',
    SEARCH: 'SEARCH',
}
const initialState = {
    activePage: PAGES.HOME,
    selectedCategoryName: null,
    selectedProductById: null,
    searchProduct: '',
    clearSearchProduct: '',
   


}
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case NAVIGATE_TO_HOME_PAGE: {
            return initialState
        };
        case SET_CATEGORY:
            return {
                ...state,
                activePage: PAGES.CATEGORY,
                selectedCategoryName: action.category,
            };
        case SELECTED_PRODUCT_BY_ID:
            return {
                ...state,
                activePage: PAGES.PRODUCT,
                selectedProductById: action.product
            };
        case SEARCHBAR_INPUT:
            return {
                ...state,
                activePage: PAGES.SEARCH,
                searchProduct: action.payload,

                
            };
        case CLEAR_SEARCHBAR:
            return {
                initialState,
                
            };
        case SEARCHBAR_RESULT:
            return {
                ...state,
                selectedProductById: action.payload,
                activePage: PAGES.PRODUCT,
                searchProduct: '',
            };
       
        default:
            return state
    }
}
