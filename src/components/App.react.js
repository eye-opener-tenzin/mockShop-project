import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../action/productsActions';
import CategoriesList from './CategoriesList.react';
import { PAGES } from '../reducer/appReducer';
import { makeStyles } from '@material-ui/core/styles';
import Category from './Category.react';
import Product from './Product.react';
import NavigationPage from '../components/NavigationPage.react'
import SearchBar from '../components/SearchBar.react'

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, san-serif',
  },
});


function App() {

  const dispatch = useDispatch();
  const styles = useStyles();


  const { activePage, searchProduct } = useSelector(state => state.category)
  console.log('app', searchProduct)
  useEffect(() => { console.log('banana')
    dispatch(getProducts())
}, [dispatch]);
  
  const pagesToRender = () => {
    switch (activePage) {
      case PAGES.HOME:
        return <CategoriesList />;
      case PAGES.CATEGORY:
        return <Category />
      case PAGES.PRODUCT:
        return <Product  />;
      default: 
        return <CategoriesList />
    }
  }
  return (
   <>
    <NavigationPage />
    <div className={styles.app}>
            {pagesToRender()}
      </div>
      {searchProduct? <SearchBar searchProduct={searchProduct} /> : null }
    </>
  );
}

export default App;
