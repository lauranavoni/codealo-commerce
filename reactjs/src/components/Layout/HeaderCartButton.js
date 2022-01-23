import React,{useContext,useState,useEffect} from 'react';
import CartContext from '../../store/CartContext'; 
import styles from '../Layout/Header.module.css';
import CartIcon from '../../components/CartIcon/CartIcon';

const HeaderCartButton = props =>{

    const cartCtxt = useContext(CartContext);
    const numberOfProducts = cartCtxt.items.reduce((currNum,item)=>{
        return currNum+item.amount;
    },0);
    const [buttonIsHighlighted,setbuttonIsHighlighted] = useState(false);
    useEffect(()=>{
        if(cartCtxt.items.length===0){
            return
        }
        setbuttonIsHighlighted(true);
        const timer = setTimeout(() => {
            setbuttonIsHighlighted(false);
        }, 300);

        return ()=>{
            clearTimeout(timer);
        }
    },[cartCtxt.items])
    const buttonClasses = `${styles.button} ${buttonIsHighlighted && styles.bump}`
    return(
        
        <button className={buttonClasses}onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
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
export default HeaderCartButton;