import { ADD_BOOK, DELETE_BOOK } from '../../constants';

const newBook = (action) => {
  const { title, author } = action;
  return {
    categorie: null,
    title,
    author,
    completed: '0%',
    chapter: '0',
    id: Math.floor(Math.random() * 999999),
  };
};

const removeBook = (state = [], action) => {
  const books = state.filter((book) => book.id !== action.id);
  return books;
};

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

export const addBook = ({ title, author }) => ({
  type: ADD_BOOK,
  title,
  author,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});
