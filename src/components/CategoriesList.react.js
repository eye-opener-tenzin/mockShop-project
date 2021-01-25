import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../action/productsAction';
import '../index.css'


function CategoriesList({ productData, fetchProducts }) {
    
    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        
            <div>
                {
                    productData.products.map(product => 
                        <div key={product.id}>
                            <img className="project-image" src={product.image} alt="product-list" />
                            <h3>{product.title}</h3>
                        </div>
                    
                    )
                }
            </div>

    )
}


const mapStateToProps = state => {
    return {
        productData: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CategoriesList)