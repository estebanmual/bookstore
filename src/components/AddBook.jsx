import React from 'react';

function AddBook() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <input type="text" multiple list="drawCategories" placeholder="Category" />
        <datalist id="drawCategories">
          <option>Action</option>
        </datalist>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
