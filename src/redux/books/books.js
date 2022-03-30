import { ADD_BOOK, DELETE_BOOK, FETCH_BOOKS } from '../../constants';

const newBook = (action) => {
  const {
    title, author, id, category,
  } = action;
  return {
    item_id: id,
    title,
    author,
    category,
  };
};

const removeBook = (state, action) => {
  const books = state.filter((book) => book.id !== action.id);
  return books;
};

// Reducer
export default function booksReducer(state = [], action) {
  let books = [];
  switch (action.type) {
    case ADD_BOOK:
      books = [...state, newBook(action)];
      return books;
    case DELETE_BOOK:
      books = removeBook(state, action.id);
      return books;
    case FETCH_BOOKS:
      Object.entries(action.books).forEach(
        ([key, value]) => books.push({
          id: key,
          title: value[0].title,
          author: value[0].author,
          category: value[0].category,
        }),
      );
      return books;
    default:
      return state;
  }
}

// Action Creators

export const addBook = ({ title, author }) => async (dispatch) => {
  const id = Math.floor(Math.random() * 999999);
  const category = null;
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nAUexoOzqDCbOkZQelNJ/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  })
    .then(() => dispatch({
      type: ADD_BOOK, title, author, id, category,
    }));
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nAUexoOzqDCbOkZQelNJ/books/${id.id}`, {
    method: 'DELETE',
  })
    .then(() => dispatch({ type: DELETE_BOOK, id }));
};

export const fetchBooks = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nAUexoOzqDCbOkZQelNJ/books')
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_BOOKS, books: data }));
};
