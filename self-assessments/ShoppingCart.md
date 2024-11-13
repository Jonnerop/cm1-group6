## File `ShoppingCart.jsx` (Jonne Roponen)

### **State Management and Input Handling**

```jsx
import { useState } from "react";
import Item from "./Item";
import "./ShoppingCart.css";
```

Imports for all the necessary dependencies for the `ShoppingCart` component.

```jsx
function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
```

Definition of `ShoppingCart` component and initialization of three state variables.

```jsx
function handleItemNameChange(event) {
  setItemName(event.target.value);
}
```

Definition of a function `handleItemChange` it updates the `itemName` state variable whenever item name changes in the input field.

```jsx
function handleQuantityChange(event) {
  const value = event.target.value;
  if (Number(value) >= 0 || value === "") {
    setQuantity(value);
  }
}
```

Definition of a function `handleQuantityChange` it updates the `quantity` state variable whenever quantity changes in the input field. Also makes sure input is not negative and not empty.

Self-Assessment

- Used useState react hook to manage the state of the shopping cart items and input fields.
- Made sure that itemName and quantity values are controlled inputs that are linked to the component's state.
- I got good direction from the starter code and it was easy to understand. I couldn't remember some of the naming conventions relating to functions and states/variables so having starter code was a good refresher.

## **Add Item Function**

```jsx
function addItem() {
  if (
    itemName.trim() !== "" &&
    quantity.trim() !== "" &&
    parseInt(quantity) > 0
  ) {
    setItems((i) => [...i, { itemName, quantity }]);

    setItemName("");
    setQuantity("");
  }
}
```

Definition of a function `addItem`, which adds new items to the shopping cart. It checks that itemName and quantity aren't empty and also that quantity is greater than 0.

Self-Assessment

- Added validation that quantity isn't empty and that quantity is positive.
- Used functional state updates so the original data isn't modified.
- Starter code had good amount checking done, other than that I knew how to implement an add function. Spread operator being really handy in handling such cases.

## **Delete and Update Item Functions**

```jsx
function deleteItem(index) {
  const updatedItems = items.filter((_, i) => i !== index);
  setItems(updatedItems);
}
```

Definition of a function `deleteItem`, which removes an item from the shopping cart based on its index. `filter` is used to create a new array excluding the item with the specified index.

```jsx
function updateQuantity(index, newQuantity) {
  if (parseInt(newQuantity) > 0) {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  }
}
```

Definition of a function `updateQuantity`, which updates the quantity of an item in the shopping cart based on its index. It first checks if the new quantity is a positive number. If so, it uses the `map` method to create a new array where the item at the specified index has its quantity updated, and then updates the `items` state with this new array.

Self-Assessment

- For removing an item deleteItem makes sure that data is immutable by filtering items.
- For updating the quantity updateQuantity updates the a certain item's quantity while making sure the new quantity is greater than zero.
- Starter code had a great starting point for a deleteItem function, which has become quite rehearsed at this point through out the material. `filter` is a great tool once again at removing an item at certain index. It was in a course video that said that "\_" is a convention for when the parameter isn't intentionally being used.

## **Render Logic**

```jsx
return (
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <div className="shopping-cart-inputs">
        <input
          type="text"
          className="shopping-cart-input"
          placeholder="Enter item"
          value={itemName}
          onChange={handleItemNameChange}
        />
        <input
          type="number"
          className="shopping-cart-input"
          placeholder="Enter quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button className="shopping-cart-button" onClick={addItem}>
          Add
        </button>
      </div>
      {items.length === 0 ? (
        <p className="shopping-cart-empty">Empty cart</p>
      ) : (
        <ol className="shopping-cart-list">
          {items.map((item, index) => (
            <Item
              key={index}
              item={item}
              index={index}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
            />
          ))}
        </ol>
      )}
    </div>
  );
}
```

This contains the render logic for the `ShoppingCart` component.

- Extracted the list item from the structure and made it into a separate `Item.jsx` file. Also used class names to denote where a certain part of css would be used. Starter code had great structure to begin working with and extracting the item component didn't prove to be too difficult.

Self-Assessment

- I used and `Item.jsx` component to manage the individual cart entries and make the code more modular and easier to manage and refactor. Course material has give good repetition and rehearse into extracting elements into separate components.

## File `Item.jsx`

### **Item Component**

```jsx
function Item({ item, index, updateQuantity, deleteItem }) {
  return (
    <li>
      <span className="item-details">{item.itemName}</span>
      <div className="item-actions">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(index, e.target.value)}
        />
        <button onClick={() => deleteItem(index)}>Delete</button>
      </div>
    </li>
  );
}

export default Item;
```

Definition of a `Item.jsx` component that is representation of an item in the shopping cart. The component renders a list item. It uses the following props:

- `item` an object that contains the details of the item.
- `index` the index of the item in the cart.
- `updateQuantity` a function to update the quantity of the item.
- `deleteItem` a function to delete the item from the cart.

Self-Assessment

- Refactored all the logic into an item component for it to be more manageable and readable.
- Made sure that it has functionality to update quantity and delete.
- Handling props has become easier though I had to take a glance at the course material just to be sure how it would be handled in this case.

## File `ShoppingCart.css`

This css file contains the styles for the `ShoppingCart.jsx` and `Item.jsx` components. Tried to make a clear and easy to use look, with typical color choices for addition and deletion buttons. I used !important to override some of the styles applied in the `Layout.css`. Used LLM to give me some style choices to apply.

## Thoughts

I wasn't exactly sure how self-assessment wast to be made. So this turned out probably way too long and thorough. Team was helpful as usual and easy to discuss with. It was good witness that others struggle with similar parts as I. Coding along with your group while everyone is tackling similar obstacles was great learning experience and will probably become even more useful in the future. Everyone was focused and doing their tasks. This session helped me better understand the use of useState hook and extracting separate element from and existing code and also how conditional rendering works. Also got great rehearse on using github pages because of our deployment issues. Getting better understanding and easy environment to merge also made me more confident in using it in the future during our course project.
