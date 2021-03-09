import React, {useState}  from 'react';
import { useSelector } from 'react-redux';

import {
    makeStyles,
    Card,
    CardMedia,
    Typography,
    FormControl,
    InputLabel,
    NativeSelect,
    Button,
    Input
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
        paddingBottom: 20,
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
        marginTop: 30,

    },

    qualityInfo: {
        marginTop: 30,
    },

    QuantityInput: {
        width: 50,
    },

    priceQuantity: {
        display: 'flex',
        flexDirection: 'column'
    },

    button: {
        marginTop: 20,
        
    }
    

})
)

const SIZE = ['S', 'M', 'L', 'XL']

export default function Product() {

    const [size, setSize] = useState(' ');
  
    const {productsById, selectedProductById } = useSelector(
        state => state.products
    )

    const selectedCategoryName = useSelector(
        state => state.category?.selectedCategoryName
    )

    const styles = useStyles();
    
    const product = productsById[selectedProductById]
    
    const sizeHandleChange = (event) => {
        setSize(event.target.value);
    };


    const isClothing = selectedCategoryName === 'men clothing' || selectedCategoryName === 'women clothing';

    return (
        <div className={styles.container}>
                <Card className={styles.card}>
                        <div className={styles.container}>
                                        <CardMedia
                                            className={styles.productImage}
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
                                        <Typography 
                                                     className={styles.price}
                                                     variant="p"
                                                    color="grey">
                                                    Price: ${product.price}
                    </Typography>
                    <div className={styles.priceQuantity}>
                                              {isClothing ?
                                        <div className={styles.clothing}>     
                                                    <h3 className={styles.sizeTitle}>Size</h3>
                                            <NativeSelect
                                                    className={styles.size}
                                                    value={size}
                                                    onChange={sizeHandleChange}>
                                                        <option aria-label="None" value="" />
                                                        {SIZE.map(size => (
                                                            <option key={size} value={size}>{size}</option>
                                                        ))}
                                                                            
                                            </NativeSelect> 
                                    </div>
                                              :   ' '}
                                           <div className={styles.quantity}>
                                                <FormControl>
                                                    <InputLabel htmlFor="quantity">Quantity</InputLabel>
                                                    <Input className={styles.QuantityInput}  id="quantity" type="number" defaultValue={0} />
                                                </FormControl>          
                            </div>  
                            </div>
                                             <Button variant="contained" color="primary" component="span" className={styles.button}>
                                                  ADD TO CART
                                              </Button>
                    </div> 
                 </Card>
       </div>
    );
}
