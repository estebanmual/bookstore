import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import style from '../styling/AddBook.module.css';

function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const dispatch = useDispatch();

  return (
    <div className={style.AddBook}>
      <h2 className={style.AddBook__title}>ADD NEW BOOK</h2>
      <form className={style.AddBook__form}>
        <input className={`${style.AddBook__input} ${style.AddBook__inputTitle}`} type="text" value={title || ''} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input className={`${style.AddBook__input} ${style.AddBook__inputAuthor}`} type="text" value={author || ''} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <button
          className={style.AddBook__button}
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
