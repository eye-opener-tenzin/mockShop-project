import { SET_CATEGORY } from "../action/appActions"
import { SELECTED_PRODUCT_ID } from "../action/productsActions"
 
const initialStat = {
    activePage: 'Home'

}
export default function appReducer(state = {}, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, selectedCategoryName: action.category, activePage: 'Category' }
        default:
            return state
    }
}
