import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from '../action/productsAction';
import '../index.css'


function CategoriesList( ) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const productData = useSelector((state) => {
        console.log(state);
        return state.product.products;
    })

    if (productData === undefined) { 
        return (
            <h1>Loading</h1>
        )
    }
    return (
        
            <div className="container">
                {
                    Object.keys(productData).map(categoryTitle => 
                        <div className="contain-item"  key={categoryTitle}>
                            <img className="project-image" src={productData[categoryTitle][0].image} alt="product-list" />
                            <h3>{categoryTitle}</h3>
                        </div>
                    
                    )
                }
            </div>

    )
}

export default CategoriesList;