# Self-Assessment: Recipe Manager (Ade Aiho)

## Requirements and Implementation

### 1. **State Management**: Use the `useState` hook for the recipe list and input fields.

```jsx
const [recipes, setRecipes] = useState([]);
const [newRecipe, setNewRecipe] = useState({
  name: "",
  ingredients: "",
  instructions: ""
});
```
The component maintains two pieces of state:
- `recipes`: An array to store all the recipes added by the user, initialized as an empty array.
- `newRecipe`: An object representing the recipe being currently entered in the input fields, initialized with empty name, ingredients, and instructions fields.

### 2. **Controlled Forms**: Handle inputs as controlled components.

```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
};
```
The `handleChange` function ensures the component responds to user input dynamically. It uses the name attribute to update the corresponding field in `newRecipe`.

### 3. **Functions**: Add and delete recipes through functions.

```jsx
const addRecipe = (e) => {
  e.preventDefault();
  if (newRecipe.name.trim() !== "" && newRecipe.ingredients.trim() !== "" && newRecipe.instructions.trim() !== "") {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    setNewRecipe({ name: "", ingredients: "", instructions: "" });
  }
};

const deleteRecipe = (index) => {
  setRecipes(recipes.filter((_, i) => i !== index));
};
```
The `addRecipe` function checks for non-empty `name`, `ingredients`, and `instructions` fields before adding a recipe to the collection. After successfully adding a recipe, it resets the `newRecipe` state to its initial empty values. The `deleteRecipe` function removes a recipe at a specific index using `filter`.

### 4. **List Rendering**: Render the recipe ingredients and instructions as list items.

```jsx
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
              name="name"
            />
          </div>
          <div className="rm-input-con">
            <input
              className="rm-input"
              type="text"
              placeholder="List of ingredients"
              value={newRecipe.ingredients}
              onChange={handleChange}
              name="ingredients"
            />
          </div>
          <div className="rm-input-con">
            <input
              className="rm-input"
              type="text"
              placeholder="Write the instructions"
              value={newRecipe.instructions}
              onChange={handleChange}
              name="instructions"
            />
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
                <p className="rm-recipe-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                <button className="rm-del-btn" onClick={() => deleteRecipe(index)}>Delete recipe</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
```
The `return` statement builds the UI. It includes input fields for adding recipes and displays the recipe collection as an unordered list (`<ul>`). The recipes are list items (`<li>`). Each recipe in the list has a button for deletion.

## Styling

```css
.rm-container {
  font-family: 'Garamond', serif;
  background-color: #627752 !important;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.rm-title {
  text-align: center;
  color: #edf0e6 !important;
  margin-bottom: 35px;
}
.rm-contents {
  background-color: #a1ba99 !important;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.rm-input-con {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 !important;
  padding: 0 !important;
  background-color: #ecf5e8 !important;
}
.rm-input {
  padding: 10px;
  border: 1px solid #c5e1a5 !important;
  border-radius: 5px;
  margin: 0px;
  font-size: 16px;
  width: 100%;
}
.rm-btn, .rm-del-btn {
  background-color: #6b8e23;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}
.rm-btn:hover, .rm-del-btn:hover {
  background-color: #4a6b1d;
}
.rm-all-recipes {
  background-color: #ecf5e8 !important;
  border-radius: 10px;
  padding: 20px !important;
  margin: 0 !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.rm-recipe-con {
  background-color: #ffffff !important;
  padding: 10px;
  border: 1px solid #c5e1a5 !important;
  border-radius: 5px;
  margin: 10px 0 10px 0px;
}
.rm-ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.rm-recipe-text {
  color: #333;
}
```
The CSS style aims for a cozy nature-inspired look. Overall, the layout is very simple and minimalistic. The `!important` declarations are used to override styles from `layout.css`.

## Reflection

I used the sample codes as a base to build my component because it’s a fairly simple application, and there are only so many ways to create a similar solution. The input fields work nicely, the form cannot be submitted if any of the fields are empty.

CSS was definetely a challenge. I don’t have much experience with it, and it was a bit difficult to get the page to a point where I could at least tolerate the design. I wanted to enhance the cozy, organic feel and highlight the food-related theme with icons and other elements, but I prioritized simplicity in order to get the fundamentals down.

Another major challenge I encountered was time management. I found myself quite stressed because I wasn’t able to finish everything in time. At least now I know, that I can't schedule anything else for the same evenings.

That said, I did find it fun to see how the other team members approached their designs. It was interesting to see the different outcomes even though we worked on the same project together.

