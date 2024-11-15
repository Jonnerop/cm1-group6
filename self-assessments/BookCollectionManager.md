# Book Collection Manager (by Heta Hartell)

```jsx
import './BookCollectionManager.css';
import React, { useState } from 'react';
```

Import of stylesheet and useState hook.

```jsx
function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: new Date().getFullYear(),
  });
```

The component maintains two pieces of state:

- `books`: An array to store all the books added by the user.
- `newBook`: An object representing the book being currently entered in the input fields, initialized with empty title and author fields and the current year.

```jsx
function handleInputChange(event) {
  const { name, value } = event.target;
  setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
}
```

The `handleInputChange` function ensures the component responds to user input dynamically. It uses the name attribute to update the corresponding field in newBook.

```jsx
function addBook() {
  if (newBook.title.trim() !== '' && newBook.author.trim() !== '') {
    setBooks((b) => [...b, newBook]);
    setNewBook({ title: '', author: '', year: new Date().getFullYear() }); // Clear the input fields
  }
}
```

The `addBook` function checks for non-empty `title` and `author` fields before adding a book to the collection. After successfully adding a book, it resets the `newBook` state to its initial values.

```jsx
function deleteBook(index) {
  const updatedBooks = books.filter((_, i) => i !== index);
  setBooks(updatedBooks);
}
```

The `deleteBook` function removes a book at a specific index using `filter`. This ensures the list dynamically updates without directly mutating the state.

```jsx
function moveBookUp(index) {
  if (index > 0) {
    const newBooks = [...books];
    [newBooks[index], newBooks[index - 1]] = [
      newBooks[index - 1],
      newBooks[index],
    ];
    setBooks(newBooks);
  }
}
function moveBookDown(index) {
  if (index < books.length - 1) {
    const newBooks = [...books];
    [newBooks[index], newBooks[index + 1]] = [
      newBooks[index + 1],
      newBooks[index],
    ];
    setBooks(newBooks);
  }
}
```

The `moveBookUp` and `moveBookDown` functions allow users to change the order of their book list. This was extra functionality not included in the starter. Both functions perform index swapping and update the state accordingly.

```jsx
  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter book title..."
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter author name..."
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Year of publication"
          name="year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} published in {book.year}
            <div className="buttons">
              <button onClick={() => deleteBook(index)} className="deleteBtn">
                Delete
              </button>
              <button className="moveUp" onClick={() => moveBookUp(index)}>
                Up
              </button>
              <button className="moveDown" onClick={() => moveBookDown(index)}>
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
```

The `return` statement builds the UI. It includes input fields for adding books and displays the book collection as an ordered list (`<ol>`). Each book in the list has buttons for deletion and reordering.

```jsx
export default BookCollectionManager;
```

Exporting component.

### Page styling:

I learned a new phrase in doing this, the `!important` when overriding css. I should start to use `rem` instead of `px` as a rule.

### Self-assessment

I relied heavily on the starter code for the component, enhancing it to my liking, extracting the Book component and adding the "move elements" functionality. I consciously chose to focus on CSS styling. During pair programming this morning, I realized my vanilla CSS skills were quite rusty. Since I’ve really only been using Tailwind in this course, I wanted a proper refresher, so I directed my focus toward improving my CSS skills. I used ChatGBT 4 to solve some css issues, that arised because of the other stylesheet overriding my component styling.

Working on this assignment with my team was fun, and doing these exercises (separate from the project) using Git branches has really helped build my confidence with Git. Repetition is essential for me, and it’s extremely helpful to have the team available on Zoom, so when questions arise or if I forget something, I can ask and receive help right away.
