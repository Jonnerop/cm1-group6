import React from 'react';

function Recipe({ recipe, index, deleteRecipe }) {
    return (
        <div className="rm-recipe-con">
            <li>
                <h3 className="rm-recipe-name">{recipe.name}</h3>
                <p className="rm-recipe-text">
                    <strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className="rm-recipe text">
                    <strong>Instructions:</strong> {recipe.instructions}</p>
                <button className="rm-del-btn" onClick={() => deleteRecipe(index)}>
                    Delete recipe</button>
            </li>
        </div>
    );
}

export default Recipe;