import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function BooksPage() {
  return (
    <div>
      <div>
        <Book
          genre="Action"
          title="The Hunger Games"
          author="Suzanne Collins"
          completed="64%"
          chapter="Chapter 17"
        />
      </div>
      <hr />
      <div>
        <AddBook />
      </div>
    </div>
  );
}

export default BooksPage;
