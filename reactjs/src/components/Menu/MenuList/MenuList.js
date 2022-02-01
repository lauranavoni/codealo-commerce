import React from 'react';
import styles from './MenuList.module.css'; //ok

import MenuItem from '../MenuItem/MenuItem';//ok
import Products from'../../../Products';

const MenuList = () => {
    const menuItems = Products.length > 0 &&
        Products.map  (product=>
        <MenuItem
            key={product.key}
            id={product.id}
            title={product.name}
            img={product.image.url}
            productDescription={product.description}
            price={product.price}
            
            
        />)
    return(
        <section className={styles.list}>
           
                <ul>{menuItems}</ul>                
            
        </section>
        
    )
}

export default MenuList;