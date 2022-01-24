import React from 'react';
import styles from './MenuList.module.css'; //ok
import Card from '../../UI/Card';//ok
import MenuItem from '../MenuItem/MenuItem';//ok
import productos from'../../../ListaProductos';

const MenuList = props => {
    const menuItems = productos.map(element=>
        <MenuItem
            key ={element.id} 
            id={element.id}
            title={element.name}
            productDescription={element.description}
            price={element.price}
            
            /* onAddCart={} */
        />)
    return(
        <section className={styles.list}>
            <Card >
                <ul>{menuItems}</ul>                
            </Card>
        </section>
        
    )
}

export default MenuList;