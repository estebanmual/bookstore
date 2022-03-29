import React from 'react';
import { useDispatch } from 'react-redux';
import { statusCategories } from '../redux/categories/categories';

function CategoriesPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(statusCategories());
        }}
      >
        Check status

      </button>
    </div>
  );
}

export default CategoriesPage;
