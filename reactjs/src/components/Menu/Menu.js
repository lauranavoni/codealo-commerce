import React from 'react';
import Summary from './CardSummary/Summary';
import MenuList from './MenuList/MenuList';

const Menu = props =>{

    return(
        <React.Fragment>
            <Summary/>
            <MenuList/>
        </React.Fragment>
    )
}
export default Menu;