import React, {useState} from 'react';
import styles from './App.module.css';

import Menu from './Components/Menu/Menu';

import Header from './Components/Layouts/Header/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const cart = [{
    id:'c1',
    name:'sushi',
    amount:2,
    price:12.99
}]
  const [cartVisible,setCartVisible] = useState(false);
  const showCartHandler = ()=>{
    setCartVisible(true);
  } 
  const hideCartHandler = ()=>{
    setCartVisible(false);
  }
  return (
    <CartProvider className={styles.app}>
      {cartVisible && <Cart onHideCart={hideCartHandler} cart={cart}/>}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
      <Menu></Menu>
    </CartProvider>
  );
}

export default App;





