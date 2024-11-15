import React, { useState } from 'react';
import Recipe from './Recipe';
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
  // Array of input fields
  const inputFields = [
    { name: "name", placeholder: "Name of the recipe", value: newRecipe.name },
    { name: "ingredients", placeholder: "List of ingredients", value: newRecipe.ingredients },
    { name: "instructions", placeholder: "Write the instructions", value: newRecipe.instructions },
  ];

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
            {inputFields.map((field) => (
              <div key={field.name} className="rm-input-con">
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={handleChange}
                  className="rm-input"
                />
              </div>
            ))}
            <button type="submit" className="rm-btn">Add Recipe</button>
          </form>
        </div>
        <div className="rm-all-recipes">
          <h2 className="rm-section-title">Recipes</h2>
          <ul className="rm-ul">
            {recipes.map((recipe, index) => (
              <Recipe
                key={index}
                recipe={recipe}
                index={index}
                deleteRecipe={deleteRecipe}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeManager
