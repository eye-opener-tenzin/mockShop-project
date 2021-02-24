import React, {useState}  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    makeStyles,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    NativeSelect,
    Button

    
} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',

    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        padding: '50px',
        width: '80%'


    },

    productImage: {
        height: 450,
        width:  300,
        margin: 20,
    
    },
    titleCase: {
        textTransform: 'capitalize',
    },

    productInfo: {
        padding: 20,
        
    },

    description: {
        paddingTop: 20,
        fontSize: 15,
    },

    clothing: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,

    },

    sizeTitle: {
        paddingRight: 20,
        paddingTop: 5,
        
    },

    quality: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,

    },

    qualityInfo: {
        marginTop: 20,
    },

    price: {
       marginTop: 30,
    },

    button: {
        marginTop: 20,
        
    }
    

})
)
export default function Product() {

    const [size, setSize] = useState(' ');
    const [quantity, setQuantity] = useState(' ');
  
    const productsById = useSelector(
        state => state.products?.productsById
    
    )

    const selectedCategoryName = useSelector(
        state => state.category?.selectedCategoryName
    )
    
    const selectedProductById = useSelector(
        state => state.products?.selectedProductById
    )


    const styles = useStyles();
    
    const product = productsById[selectedProductById]
    
    const sizeHandleChange = (event) => {
        setSize(event.target.value);
    };

    const quantityHandleChange = (event) => {
        setQuantity(event.target.value);
    };

    const clothing = selectedCategoryName === 'men clothing' || selectedCategoryName === 'women clothing';

    return (
        <div className={styles.container}>
                <Card className={styles.card}>
                        <div className={styles.container}>
                                        <CardMedia
                                            className={styles.productImage}
                                            height='100%'
                                            width='100%'
                                            image={product.image}
                                        />
                        </div>
                        <div className={styles.productInfo}>
                                        <Typography
                                                variant='h5'
                                                color='black'
                                                className={styles.titleCase}>
                                                                {product.title}
                                        </Typography>
                                        <Typography 
                                                variant="h6"
                                                color="grey"
                                                className={styles.description}>
                                                        {product.description}
                                        </Typography>
                                              {clothing ?
                                        <div className={styles.clothing}>     
                                                    <h3 className={styles.sizeTitle}>Size</h3>
                                         <NativeSelect
                                                    className={styles.size}
                                                    value={size}
                                                    onChange={sizeHandleChange}>
                                                        <option aria-label="None" value="" />
                                                        <option value={'S'}>S</option>
                                                        <option value={'M'}>M</option>
                                                        <option value={'L'}>L</option>
                                                        <option value={'XL'}>XL</option>
                                                </NativeSelect> 
                                    </div>
                                              :   ' '}
                                    <FormControl>
                                           <Typography 
                                                     className={styles.price}
                                                     variant="p"
                                                    color="grey">
                                                    Price: ${product.price}
                                            </Typography>
                                           <div className={styles.quantity}>
                                                  <h5 className={styles.qualityInfo}>Quantity</h5>
                                                  <NativeSelect
                                                        value={quantity}
                                                        onChange={quantityHandleChange}>
                                                              <option aria-label="None" value="" />
                                                             <option value={1}>1</option>
                                                             <option value={2}>2</option>
                                                             <option value={3}>3</option>
                                                             <option value={3}>4</option>
                                                             <option value={3}>5</option>
                                                             <option value={3}>6</option>
                                                             <option value={3}>7</option>
                                                            <option value={3}>8</option>
                                                    </NativeSelect>
                                  </div>  
                                             <Button variant="contained" color="primary" component="span" className={styles.button}>
                                                  ADD TO CART
                                              </Button>
                                    </FormControl>
                        </div> 
                 </Card>
       </div>
    );
}
