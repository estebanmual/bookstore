import React from 'react';
import PropTypes from 'prop-types';
import style from '../styling/Book.module.css';

function Book({
  genre, title, author, completed, chapter,
}) {
  return (
    <div className={style.Book}>
      <div className={style.Book__leftInfo}>
        <div className={style.Book_info}>
          <p className={style.Book__info__genre}>{genre}</p>
          <p className={style.Book__info__title}>{title}</p>
          <p className={style.Book__info__author}>{author}</p>
        </div>
        <div className={style.Book__buttons}>
          <button type="button">Comments</button>
          <hr />
          <button type="button">Remove</button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={style.Book__rightInfo}>
        <div className={style.Book__completed}>
          <p>circle</p>
          <div>
            <p className={style.Book_numberCompleted}>{completed}</p>
            <p className={style.Book_completedText}>Completed</p>
          </div>
        </div>
        <hr className={style.Book__rightLine} />
        <div>
          <p>Current Chapter</p>
          <p>{chapter}</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
}

export default Book;

Book.defaultProps = {
  genre: '',
  title: '',
  author: '',
  completed: '',
  chapter: '',
};

Book.propTypes = {
  genre: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  completed: PropTypes.string,
  chapter: PropTypes.string,
};
