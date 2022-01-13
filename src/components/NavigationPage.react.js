import React, { useState, useEffect } from 'react';
import { useDispatch } from  'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { setHomePage } from '../action/appActions';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { isCartToggle } from '../action/cartActions'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      cursor: 'pointer',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  
}));


export default function NavigationPage( { cart }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);
 
  // useEffect(() => {
  //   let count = 0;
  //   cart.forEach(item => {
  //     count += item.qty
  //   })
  //   setCartCount(count)
  // }, [cart, cartCount])


const onChange = (event) => {
  let string = event.target.value
     dispatch({type: 'SEARCHBAR_INPUT', payload: string})
}

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <HomeIcon onClick={() => dispatch(setHomePage())} />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap onClick={() => dispatch(setHomePage())}>
           Mock-Shop
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChange}
          />
          </div>
          <IconButton
            value="cart"
            color='inherit'
            
            className={classes.cartButton}
            onClick={() => dispatch(isCartToggle())}>
            {isCartToggle === true ? (
              <ShoppingCartRoundedIcon size='medium' />
            ) : (
              <ShoppingCartOutlinedIcon size='medium' />
            )}
          </IconButton>
      </Toolbar>
    </AppBar>
  </div>
  );
}
