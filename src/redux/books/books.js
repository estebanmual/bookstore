import { ADD_BOOK, DELETE_BOOK } from '../../constants';

const newBook = (action) => {
  const { categorie, title, author } = action;
  return {
    title,
    categorie,
    author,
    id: Math.floor(Math.random() * 999999),
  };
};

const removeBook = (state = [], id) => (state.filter((book) => book.id !== id));

// Reducer
export default function booksReducer(state = [], action) {
  let books = null;
  switch (action.type) {
    case ADD_BOOK:
      books = [...state, newBook(action)];
      return books;
    case DELETE_BOOK:
      books = removeBook(state, action.id);
      return books;
    default:
      return state;
  }
}

// Action Creators

export const addBook = (categorie, title, author) => ({
  type: ADD_BOOK,
  categorie,
  title,
  author,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});
