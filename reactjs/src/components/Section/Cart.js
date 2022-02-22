import React,{useContext} from 'react';
import styles from '../Cart/Cart.modules.css';
import Modal from '../UI/Modal'
import CartProducts from '../Section/CartProducts';
import CartContext from '../../store/CartContext';



const Cart = props =>{
    const cartCtxt = useContext(CartContext);
    const hasProducts = cartCtxt.products.length>0;
    const cartProductsAddHandler =(products) =>{
        cartCtxt.addProducts({...products,amount:1});
    }
    const cartProductsRemoveHandler = (id) =>{
        cartCtxt.removeProducts(id)
    }
    const cartProducts = (
    <ul className={styles['cart-products']}>
        {
            cartCtxt.products.map((products) => (
                <CartProducts 
                    key={products.id} 
                    name={products.name} 
                    id={products.id} 
                    amount={products.amount} 
                    price={products.price}
                    onRemove={cartProductsRemoveHandler.bind(null,products.id)}
                    onAdd={cartProductsAddHandler.bind(null,products)}
                />
            )
            )
        }
    </ul>
    );

    return (
        <Modal onClick={props.onHideCart}>
            {cartProducts}
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
                {hasProducts && <button className={styles.button}>Buy</button>}
            </div>
        </Modal>
    )

}
export default Cart;