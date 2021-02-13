export default function appReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, selectedCategoryName: action.category }
        default:
            return state
    }
}