import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from '../styling/Book.module.css';
import { deleteBook } from '../redux/books/books';

function Book({
  category, title, author, id,
}) {
  const dispatch = useDispatch();
  return (
    <div className={style.Book}>
      <div className={style.Book__leftInfo}>
        <div className={style.Book_info}>
          <p className={style.Book__info__genre}>{category}</p>
          <p className={style.Book__info__title}>{title}</p>
          <p className={style.Book__info__author}>{author}</p>
        </div>
        <div className={style.Book__buttons}>
          <button type="button">Comments</button>
          <hr />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteBook({ id }));
            }}
          >
            Remove

          </button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={style.Book__rightInfo}>
        <div className={style.Book__completed}>
          <p>circle</p>
          <div>
            <p className={style.Book_numberCompleted}>0%</p>
            <p className={style.Book_completedText}>Completed</p>
          </div>
        </div>
        <hr className={style.Book__rightLine} />
        <div>
          <p>Current Chapter</p>
          <p>0</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
}

export default Book;

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  id: '',
};

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
