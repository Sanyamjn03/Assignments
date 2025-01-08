// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  darkMode: false,
  currentSection: 'home',
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export { store };
