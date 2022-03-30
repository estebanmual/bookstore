import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const initialData = {
  books: [{
    categorie: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: '64%',
    chapter: 'Chapter 17',
    id: 1,
  }],
};

/* eslint-disable no-underscore-dangle */

const rootReducer = combineReducers({ books: booksReducer, categories: categoriesReducer });
const store = createStore(rootReducer, initialData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
