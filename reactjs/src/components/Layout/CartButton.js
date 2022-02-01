import React,{useContext,useState,useEffect} from 'react';
import CartContext from '../../store/CartContext'; 
import styles from '../Layout/Header.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = props =>{

    const cartCtxt = useContext(CartContext);
    const numberOfProducts = cartCtxt.products.reduce((currNum,products)=>{
        return currNum+products.amount;
    },0);
    const [buttonIsHighlighted,setbuttonIsHighlighted] = useState(false);
    useEffect(()=>{
        if(cartCtxt.products.length===0){
            return
        }
        setbuttonIsHighlighted(true);
        const timer = setTimeout(() => {
            setbuttonIsHighlighted(false);
        }, 300);

        return ()=>{
            clearTimeout(timer);
        }
    },[cartCtxt.products])
    const buttonClasses = `${styles.button} ${buttonIsHighlighted && styles.bump}`
    return(
        
        <button className={buttonClasses}onClick={props.onClick}>
            <span className={styles.icon}>
                <ShoppingCartIcon/>
            </span>
            <span >
                Your Cart
            </span>
            <span className={styles.badge}>
                {numberOfProducts}
            </span>
        </button>
    )
}
export default CartButton;