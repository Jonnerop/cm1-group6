import React from 'react';

function Book({ book, index, deleteBook, moveBookUp, moveBookDown }) {
  return (
    <li>
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
  );
}

export default Book;
