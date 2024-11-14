import React, { useState } from 'react';
import './RecipeManager.css';

function RecipeManager() {
  // State to store the recipes, empty array as initial value
  const [recipes, setRecipes] = useState([]);
  // State for storing the current input values
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  // Handle the input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the newRecipe state with the new value
    setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  // Add a new recipe
  const addRecipe = (e) => {
    e.preventDefault();
    // Add if the input fields are not empty
    if (newRecipe.name.trim() !== ""
      && newRecipe.ingredients.trim() !== ""
      && newRecipe.instructions.trim() !== "") {
      setRecipes((prevRecipes => [...prevRecipes, newRecipe])); // Add the new recipe to the recipes array
      setNewRecipe({ name: "", ingredients: "", instructions: "" }); // Clear the input fields
    }
  };

  // Delete a recipe
  const deleteRecipe = (index) => {
    // Filter out the recipe at the given index
    setRecipes(recipes.filter((_, i) => i !== index));
  }

  return (
    <div className="rm-container">
      <h1 className="rm-title">Recipe Manager</h1>
      <div className="rm-contents">
        <div className="rm-add-recipe">
          <h2 className="rm-section-title">Add a new recipe</h2>
          <form onSubmit={addRecipe}>
            <div className="rm-input-con">
              <input
                className="rm-input"
                type="text"
                placeholder="Name of the recipe"
                value={newRecipe.name}
                onChange={handleChange}
                name="name" />
            </div>
            <div className="rm-input-con">
              <input
                className="rm-input"
                type="text"
                placeholder="List of ingredients"
                value={newRecipe.ingredients}
                onChange={handleChange}
                name="ingredients" />
            </div>
            <div className="rm-input-con">
              <input
                className="rm-input"
                type="text"
                placeholder="Write the instructions"
                value={newRecipe.instructions}
                onChange={handleChange}
                name="instructions" />
            </div>
            <button type="submit" className="rm-btn">Add Recipe</button>
          </form>
        </div>
        <div className="rm-all-recipes">
          <h2 className="rm-section-title">Recipes</h2>
          <ul className="rm-ul">
            {recipes.map((recipe, index) => (
              <div key={index} className="rm-recipe-con">
                <li>
                  <h3 className="rm-recipe-name">{recipe.name}</h3>
                  <p className="rm-recipe-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                  <p className="rm-recipe text"><strong>Instructions:</strong> {recipe.instructions}</p>
                  <button className="rm-del-btn" onClick={() => deleteRecipe(index)}>Delete recipe</button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeManager
