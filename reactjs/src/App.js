//import React, {useState} from 'react';
import styles from './App.module.css';
//import CartProvider from './store/CartProvider';
import Header from'./components/Layout/Header';
//import Cart from './components/Cart/Cart';
//import ListaProductos from "./ListaProductos";
//import Menu from './components/Menu/Menu';
import Footer from'../src/components/Layout/Footer';
/*
function App() {
  const cart = [{
    id:'',
    title:'',
    description :'',
    amount:2,
    price:1.84
}]
  const [cartVisible,setCartVisible] = useState(false);
  const showCartHandler = ()=>{
    setCartVisible(true);
  } 
  const hideCartHandler = ()=>{
    setCartVisible(false);
  }

*/

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.App}>
        <Footer />
      </div>
    </div>
  );
}

 // eslint-disable-next-line no-lone-blocks
 {/*
  return <>

 
     <CartProvider className={styles.app}>
      {cartVisible && <Cart onHideCart={hideCartHandler} cart={cart}/>}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
     <Menu/>
  </CartProvider>


 
  </>
  ;
};

export default App; 
*/}
