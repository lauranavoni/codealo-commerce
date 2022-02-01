import React from 'react';
import styles from '../Layout/Header.module.css'; //ok
import BannerImg from '../../assets/BannerImg.jpg';//ok
import CartButton from '../Layout/CartButton';



const Header = props =>{
    return(
        <React.Fragment>
            <header 
                className={styles.header}
                
            >
                <h1>Ecommerce Codealo</h1>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={BannerImg} alt=''/>
            </div>
        </React.Fragment>
        
    )
}

export default Header;