import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProductById } from '../action/appActions';
import {
    makeStyles,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    GridList,
    GridListTile,
    ListSubheader,
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    card: {
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        
       
    },
    image: {
        height: 450,
        margin: 20,
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: 'black'
    },

    titleCase: {
        textTransform: 'capitalize',
    },

    gridList: {
        width: '80%',
        height: '100%',
       
    },



}))

export default function Category() {
    const selectedCategoryName = useSelector(
        state => state.category?.selectedCategoryName
    );
  const productsByCategory = useSelector(
        state => state.products?.productsByCategory
    )
    
    const dispatch = useDispatch();
    const styles = useStyles();

    const products = productsByCategory[selectedCategoryName]
    if (!products) {
        return null
    }
    return (
        <div className={styles.container}>
          
            <GridList className={styles.gridList}>
                <GridListTile key="Subheader" style={{ height: 'auto' }}>
                        <ListSubheader className={styles.title}>{selectedCategoryName}</ListSubheader>
                { products.map((selectedProducts) => {
                    return (
                        <Card key={selectedProducts.id} className={styles.card}>
                            <CardActionArea  onClick={() => dispatch(selectedProductById(selectedProducts.id))}>
                                <CardMedia
                                    className={styles.image}
                                    image={selectedProducts.image}
                                    
                                />
                                    <Typography
                                        variant='h6'
                                        color='primary'
                                        className={styles.titleCase}
                                    >
                                        {selectedProducts.title}
                                    </Typography>
                            </CardActionArea>
                               
                            </Card>
                        
                    );
                })
            
                        }
                     </GridListTile>
             </GridList>
        </div>
    );
}
