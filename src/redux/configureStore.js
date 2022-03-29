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

const rootReducer = combineReducers({ books: booksReducer, categories: categoriesReducer });
const store = createStore(rootReducer, initialData);

export default store;
