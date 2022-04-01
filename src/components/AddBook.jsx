import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import style from '../styling/AddBook.module.css';

function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const categories = ['Fantasy', 'Adventure', 'Romance', 'Contemporary', 'Dystopian', 'Mystery', 'Horror', 'Thriller', 'Paranomal', 'Historical Fiction', 'Memoir', 'Cooking', 'Art', 'Self-help', 'Development', 'Motivational', 'Health', 'History', 'Travel', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor', 'Humor'];

  const categoriesOrd = categories.sort((a, b) => {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });

  return (
    <div className={style.AddBook}>
      <h2 className={style.AddBook__title}>ADD NEW BOOK</h2>
      <form className={style.AddBook__form}>
        <input className={`${style.AddBook__input} ${style.AddBook__inputTitle}`} type="text" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <input className={`${style.AddBook__input} ${style.AddBook__inputAuthor}`} type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <input className={style.AddBook__input} type="text" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)} multiple list="categoryOptions" />
        <datalist id="categoryOptions">
          {categoriesOrd.map((category) => (
            <option key={Math.random()}>{category}</option>
          ))}
        </datalist>
        <button
          className={style.AddBook__button}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (title && author && category) {
              dispatch(addBook({ title, author, category }));
              setAuthor('');
              setTitle('');
              setCategory('');
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
