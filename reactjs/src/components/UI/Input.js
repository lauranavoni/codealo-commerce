import React from 'react';
import styles from '../UI/Input.module.css'; //ok

const Input = React.forwardRef((props,ref) =>{
    return(
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}></input>
        </div>

    );
}); 

export default Input;