import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../redux/books/books';

function BooksPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <div>
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
      <hr />
      <div>
        <AddBook />
      </div>
    </div>
  );
}

export default BooksPage;
