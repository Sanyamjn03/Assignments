import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/Reducer'; // Adjust the path to your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
