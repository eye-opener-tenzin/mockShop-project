import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {searchBarResult} from '../action/appActions';
import {clearSearchBar, searchBarInput} from '../action/appActions';
import Backdrop from '@material-ui/core/Backdrop';

import { 
    makeStyles, 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Divider,
  } from '@material-ui/core';

  const useStyles = makeStyles ((theme) => ({
      container: {
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
        
      },
  
      card: {
          marginLeft: 8,
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
      },
  
      categoryImage: {
        height: 200
      },
  
      titleCase: {
          textTransform: 'capitalize',
      },

      clearSearch: {
          position: 'relative',
          display: 'flex',
          right: 50,
          top: 30,
          cursor: 'pointer',
          flexGrow: 1,
         alignSelf: 'flex-end',
        
      },

      backdrop: {
        backgroundColor: '#fff',
        zIndex: theme.zIndex.drawer +1,
        top: 62,
        display: 'flex',
         flexDirection: 'column',
        
      }
  }));
    
function SearchBar({ searchProduct }) {
     const dispatch = useDispatch();
    const styles = useStyles();
    const products  = useSelector(state => state.products.products)
    if (!products) {
        return null
    }
   
  const searchProductsList =  products.filter(product => product.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1 || 
    product.description.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1 ||
    product.category.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1 );
    
    return (
        <Backdrop className={styles.backdrop} open={true}>
            <h3 className={styles.clearSearch} variant="outlined" color="secondary" onClick={() => dispatch(clearSearchBar())}>
                Clear Search 
             </h3>
            <h1>{searchProduct}</h1>
                {searchProduct.length > 2 ? 
                    <div className={styles.container}>
                    {searchProductsList.map((selectedProduct, index) => {
                        return (
                        <Card key={index} className={styles.card}>
                            <CardActionArea onClick={()=>dispatch(searchBarResult(selectedProduct.id))}>
                            <CardMedia
                                className={styles.categoryImage}
                                image={[selectedProduct][0].image}
                                />
                            <CardContent>
                                <Typography
                                variant='h6'
                                className={styles.titleCase}
                                >
                                {selectedProduct.title}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        );
                    })}
                    </div>
                    : null    
                }
            
        </Backdrop>
    )
}

export default SearchBar;
