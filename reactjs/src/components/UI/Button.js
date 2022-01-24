import React from 'react';
import styles from '../UI/Button.module.css';

const Button = props =>{
    return(
        <button 
        className={`${styles.Button} ${props.className}`}
        type={props.type || 'button'} 
        onClick={props.onClick}
        >
            <p>{props.children}</p>
           {/*  <div className={styles.cartAmount}>
                {}
            </div> */}
        </button>
    )
}

export default Button;