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
import Cart from '../components/Cart.react'
import { isCartToggle } from '../action/cartActions';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, san-serif',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  contain: {
    position: 'relative',
    height: '100%',
    flexGrow: 1
  },
  heroAndCart: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  heroContainer: {
    flex: 1,
  },
  cartContainer: {
    width: '350px',
  },
});


function App() {

  const dispatch = useDispatch();
  const styles = useStyles();


  const { activePage, searchProduct } = useSelector(state => state.category)
  const isCartToggle = useSelector(state => state.cart.isCartToggle)
  useEffect(() => {
    dispatch(getProducts())
}, [dispatch]);
  
  const pagesToRender = () => {
    switch (activePage) {
      case PAGES.HOME:
        return <CategoriesList />
      case PAGES.CATEGORY:
        return <Category />
      case PAGES.PRODUCT:
        return <Product />
      default: 
        return <CategoriesList />
    }
  }
  return (
   <>
    
      <div className={styles.app}>
        <div className={styles.navigationPage}>
        <NavigationPage />
        </div>
        <div className={styles.contain}>
          {searchProduct ? <SearchBar searchProduct={searchProduct} /> : null}
          <div className={styles.heroAndCart}>
            <div className={styles.heroContain}>{pagesToRender()}</div>
            {isCartToggle && (
              <div className={styles.cartContain}>
                < Cart />
                </div>
          )}
          </div>
        </div> 
      </div>
    </>
  );
}

export default App;
