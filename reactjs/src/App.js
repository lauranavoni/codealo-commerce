import React from 'react';
import styles from './App.module.css';
import Header from './Component/Header/Header';
import CartProvider from './Component/store/CartProvider';
import { useEffect, useState } from 'react';
import { fetchProducts } from "../src/Api";

export default function App() {
const [products, setProducts] = useState (null);

const getData = async () => {
  setProducts ((await fetchProducts()) || []);
};


useEffect(() =>{
 getData();
}, [])

const cart = [{
  id:'c1',
  title:'Front End',
  description:'Front End',
  price:0,
  image:'Front End'
 
}]

const [cartVisible,setCartVisible] = useState(false);
  const showCartHandler = ()=>{
    setCartVisible(true);
  } 
  const hideCartHandler = ()=>{
    setCartVisible(false);
  }
  return (
    <><CartProvider className={styles.app}>
      {cartVisible && <Cart onHideCart={hideCartHandler} cart={cart} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
  
    </CartProvider><div>

        <div className='App'>
          <h1> Categories</h1>
          {products.map((cat, idx) => {
            return <div key={cat.id}>{cat.name}</div>;
          })}
        </div>
      </div></>
  );
}
