import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function BooksPage() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            categorie={book.categorie}
            title={book.title}
            author={book.author}
            completed={book.completed}
            chapter={book.chapter}
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
