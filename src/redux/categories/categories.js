import { STATUS_CATEGORIES } from '../../constants';

// Reducer

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case STATUS_CATEGORIES:
      return 'Under construction';
    default:
      return state;
  }
}

// Actions Creators

export const statusCategories = () => ({ type: STATUS_CATEGORIES });
