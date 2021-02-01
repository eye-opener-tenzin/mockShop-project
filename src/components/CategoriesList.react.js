import React from 'react';
import { useSelector } from 'react-redux';
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
    const productsByCatergory = useSelector(
        state => state.products?.productsByCatergory
    );
    console.log(productsByCatergory);
    const styles = useStyles();
    return (
        <div className={styles.container}>
            {productsByCatergory != null ? (
                Object.keys(productsByCatergory).map((category, index) => {
                    return (
                        <Card key={index} className={styles.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={styles.categoryImage}
                                    image={productsByCatergory[category][0].image}
                                />
                                <CardContent>
                                    <Typography
                                        variant='h6'
                                        color='primary'
                                        className={styles.titleCase}
                                    >
                                        {category}
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