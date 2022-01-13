export const SET_CATEGORY = 'SET_CATEGORY';
export const SELECTED_PRODUCT_BY_ID = "SELECTED_PRODUCT_ID"
export const NAVIGATE_TO_HOME_PAGE = 'NAVIGATE_TO_HOME_PAGE';
export const SEARCHBAR_INPUT  = 'SEARCHBAR_INPUT';
export const CLEAR_SEARCHBAR = 'CLEAR_SEARCHBAR';
export const SEARCHBAR_RESULT = 'SEARCHBAR_RESULT';


export const getCategory = category => ({
    type: 'SET_CATEGORY',
    category,
});

export const selectedProductById = selectedProductById => ({
    type: 'SELECTED_PRODUCT_ID',
    payload: selectedProductById
});

export const setHomePage = setHomePage => ({
    type: 'NAVIGATE_TO_HOME_PAGE',
    payload: setHomePage,
})

export const searchBarInput = searchBarInput => ({
    type: 'SEARCHBAR_INPUT',
    payload: searchBarInput,
})

export const clearSearchBar = clearSearchBar => ({
    type: 'CLEAR_SEARCHBAR',
    payload: clearSearchBar
})

export const searchBarResult = searchBarResult => ({
    type: 'SEARCHBAR_RESULT',
    payload: searchBarResult

})

