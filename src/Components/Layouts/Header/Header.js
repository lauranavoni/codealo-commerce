import React from 'react';
import styles from '../Header/Header.module.css';
import BannerImg from '../../../assets/BannerImg.jpg';
import HeaderCartButton from '../Header/HeaderCartButton';
const Header = props =>{
    return(
        <React.Fragment>
            <header 
                className={styles.header}
            >
                <h1>Ecommerce Codealo</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={BannerImg} alt='a delicious plate of food'/>
            </div>
        </React.Fragment>
        
    )
}

export default Header;