import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../action/productsActions';
import CategoriesList from './CategoriesList.react';
import { makeStyles } from '@material-ui/core';
import ProductsList from './ProductsList.react';
import Product from './Product.react';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, san-serif',
  },
});


function App() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const selectedCategoryName = useSelector(state => state.category?.selectedCategoryName)
  const selectedProductById =  useSelector(state => state.products.selectedProductById)

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <div className={styles.app}>
      {selectedProductById ? <Product selectedProductById={selectedProductById} /> : selectedCategoryName ? <ProductsList selectedCategoryName={selectedCategoryName} /> : <CategoriesList />} 
  
    </div>
  );
}

export default App;
