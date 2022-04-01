import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../redux/books/books';
import style from '../styling/BooksPage.module.css';

function BooksPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <div className={style.booksDisplay}>
        {books.map((book) => (
          <Book
            key={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <hr className={style.hr} />
      <div>
        <AddBook />
      </div>
    </div>
  );
}

export default BooksPage;
