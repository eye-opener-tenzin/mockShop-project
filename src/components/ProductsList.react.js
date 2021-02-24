import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProductById } from '../action/productsActions';
import {
    makeStyles,
    CircularProgress,
    Card,
    CardHeader,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core';



const useStyles = makeStyles({
    container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        marginLeft: 20,
        width: 200,
    },
    selectedProductsImage: {
        height: 250,
        margin: 20,
    
    },
    titleCase: {
        textTransform: 'capitalize',
    }

})

export default function ProductsList() {
    const selectedCategoryName = useSelector(
        state => state.category?.selectedCategoryName
    );


    const productsByCategory = useSelector(
        state => state.products?.productsByCategory
    )
   
    const dispatch = useDispatch();
    const styles = useStyles();

    
    
    return (
        <div className={styles.container}>
            { selectedCategoryName != null ? (
                productsByCategory[selectedCategoryName].map((selectedProducts, index) => {
                    return (
                        <Card key={index} className={styles.card}>
                            <CardActionArea onClick={() => dispatch(selectedProductById(selectedProducts.id))}>
                                <CardHeader className={ styles.titleCase} title= {selectedProducts.category} />
                                <CardMedia
                                    className={styles.selectedProductsImage}
                                    height="100%"
                                    width="100%"
                                    image={selectedProducts.image}
                                    
                                />
                                <CardContent>
                                    <Typography
                                        variant='h6'
                                        color='primary'
                                        className={styles.titleCase}
                                    >
                                        {selectedProducts.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })
            ) : (
                    <CircularProgress size={24}/>
            )}
        </div>
    );
}
