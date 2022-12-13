import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/RestorantDinnerImg.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>TradersOfficeMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='A table full of fancy food'/>
        </div>
    </React.Fragment>
}

export default Header