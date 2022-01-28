import React,{useContext} from 'react';
import styles from '../Cart/Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../store/CartContext';


const Cart = props =>{
    const cartCtxt = useContext(CartContext);
    const hasItems = cartCtxt.items.length>0;
    const cartItemAddHandler =(item) =>{
        cartCtxt.addItem({...item,amount:1});
    }
    const cartItemRemoveHandler = (id) =>{
        cartCtxt.removeItem(id)
    }
    const cartItems = (
    <ul className={styles['cart-items']}>
        {
            cartCtxt.items.map((item) => (
                <CartItem 
                   
                    title={item.title} 
                    id={item.id} 
                    description={item.description} 
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                />
            )
            )
        }
    </ul>
    );

    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    ${cartCtxt.totalAmount.toFixed(2)}
                </span>
            </div >
            <div className={styles.actions}>
                <button className={styles["button--alt"]}onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={styles.button}>Buy</button>}
            </div>
        </Modal>
    )

}
export default Cart;