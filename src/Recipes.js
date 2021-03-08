import React from 'react';
import './Recipes.css'


const Recipes = ({recipe}) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div>
        <img className="recipe__img" src={recipe ["recipe"]["image"]}/>
        <p className="recipe__title">{recipe ["recipe"]["label"]}</p>
      </div>
    )
   );
}

export default Recipes
