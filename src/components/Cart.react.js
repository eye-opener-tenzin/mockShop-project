import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeFromCart } from '../action/cartActions';
import { selectedProductById } from '../action/appActions';


import { 
    makeStyles,
    Paper,
    Button,
    
  } from '@material-ui/core';
import Product from './Product.react';

  const useStyles = makeStyles ((theme) => ({
      container: {
      height: '100%',
      marginLeft: '90%',
        
      },
  
      
  }));
    
export default function Cart( {isCartToggle, Cart}) {
    const dispatch = useDispatch();
    const styles = useStyles();
  
    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    const productsByID  = useSelector(state => state.products.productsByID);
    const cartItemEntries = Object.entries(itemsInCart);
  
    const cartItemClickHandler = productID => {
      dispatch(selectedProductById (productID));
    };
  
    const cartItemDeleteHandler = (event, cartItemID) => {
      event.stopPropagation();
      dispatch(removeFromCart(cartItemID));
    };
  
   
    return (
        <div className={styles.container}>
            <Paper className={styles.maxHeight} elevation={3}>
        <div className={styles.cartContent}>
          {cartItemEntries.length === 0
            ? 'Your cart is empty'
            : cartItemEntries.map(([cartItemID, qty]) => {
                const [productID, size] = cartItemID.split('_', 2);
                return (
                  <Product
                    key={cartItemID}
                    product={productsByID[productID]}
                    qty={qty}
                    size={size}
                    onCartItemClick={() => {
                      cartItemClickHandler(productID);
                    }}
                    onCartItemDelete={event =>
                      cartItemDeleteHandler(event, cartItemID)
                    }
                  />
                );
              })}
        </div>
      <div className={styles.container}>
         <h1 >TOGGEL</h1>
      <div className={styles.checkoutButtonContainer}>
       
          <Button variant='contained' color='primary'>
            Checkout
          </Button>
        </div>
        </div>
      // </Paper>
      //  </div>
    )
}

