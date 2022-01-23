import React from 'react';
import MealsSummary from '../Menu/MealsSummary/MealsSummary';
import MenuList from '../Menu/MenuList/MenuList';

const Menu = props =>{

    return(
        <React.Fragment>
            <MealsSummary/>
            <MenuList/>
        </React.Fragment>
    )
}
export default Menu;