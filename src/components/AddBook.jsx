import React from 'react';

function AddBook() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <div>
        <input type="text" placeholder="Book title" />
        <input type="text" multiple list="drawCategories" placeholder="Category" />
        <datalist id="drawCategories">
          <option>Action</option>
        </datalist>
        <button type="button">ADD BOOK</button>
      </div>
    </div>
  );
}

export default AddBook;
