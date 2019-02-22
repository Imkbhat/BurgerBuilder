import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngrediant/BurgerIngrediant';

const burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />
        }); //Transforming Key value pair into an array.
    });


    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
             {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
}

export default burger;