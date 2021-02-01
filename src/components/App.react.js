import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../action/productsActions';
import CategoriesList from './CategoriesList.react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, san-serif',
  },
});


function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <div className={styles.app}>
      <CategoriesList />

    </div>
  );
}

export default App;
