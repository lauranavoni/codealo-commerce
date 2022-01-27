import React from 'react';
import styles from '../Layout/Header.module.css'; //ok
import BannerImg from '../../assets/BannerImg.jpg';//ok
import HeaderCartButton from '../Layout/HeaderCartButton';
import SearchIcon from "@material-ui/icons/Search";


const Header = props =>{
    return(
        <React.Fragment>
            <header 
                className={styles.header}
                
            >
            <div className='header__center'>
            <input type="text" />
                <SearchIcon />
            </div>
                <h1>Ecommerce Codealo</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={BannerImg} alt=''/>
            </div>
        </React.Fragment>
        
    )
}

export default Header;