import React,{useContext} from 'react';
import styles from '../MenuItem/MenuItem.module.css'; //ok
import MenuItemForm from './MenuItemForm'; // ok
import CartContext from '../../../store/CartContext'; //ok

const MenuItem = props =>{
    const cartCtxt = useContext(CartContext);
    
    const addToCartHandler = (enteredAmount) =>{
        cartCtxt.addItem({
            id:props.id,
            title: props.title,
            amount:enteredAmount,
            price:props.price
        })
    }
    return(
        <div className={styles.products}>
            <div className={styles.productsInfo}>
                <h2>{props.title}</h2>
                <p className={styles.description}>{props.productDescription}</p>
                <p className={styles.price}>{`$${props.price.toFixed(2)}`}</p>
            </div>
            <MenuItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
        
    )
}
export default MenuItem;