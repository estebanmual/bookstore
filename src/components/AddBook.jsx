import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" value={title || ''} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={author || ''} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (title && author) {
              dispatch(addBook({ title, author }));
              setAuthor();
              setTitle();
            }
          }}
        >
          ADD BOOK

        </button>
      </form>
    </div>
  );
}

export default AddBook;
