export default function productsReducer(state = {}, action) {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            const productsByCategory = action.payload.reduce(
                (acc, product) => {
                    const category = product.category;
                    return {
                        ...acc,
                        [category]: [...(acc[category] || []), product]
                    };
                },
                {}
            );
            return {
                ...state,
                products: action.payload,
                productsByCategory
            }
        default:
            return state
    }
}