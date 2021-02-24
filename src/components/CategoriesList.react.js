import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../action/appActions';
import {
    makeStyles,
    CircularProgress,
    Card,
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
        marginLeft: 8,
        width: 200,
    },
    categoryImage: {
        height: 250,
        margin: 20,
    
    },
    titleCase: {
        textTransform: 'capitalize',
    }

})

export default function CategoryList() {
    const productsByCategory = useSelector(
        state => state.products?.productsByCategory
    );
     
    const styles = useStyles();
    const dispatch = useDispatch();
    
    return (
        <div className={styles.container}>
            {productsByCategory != null ? (
                Object.keys(productsByCategory).map((categoryName, index) => {
                    return (
                        <Card key={index} className={styles.card}>
                            <CardActionArea onClick={() =>dispatch(getCategory(categoryName)) }>
                                <CardMedia
                                    className={styles.categoryImage}
                                    image={productsByCategory[categoryName][0].image}
                                />
                                <CardContent>
                                    <Typography
                                        variant='h6'
                                        color='primary'
                                        className={styles.titleCase}
                                    >
                                        {categoryName}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })
            ) : (
                    <CircularProgress size={24} />
                )}
        </div>
    );
}