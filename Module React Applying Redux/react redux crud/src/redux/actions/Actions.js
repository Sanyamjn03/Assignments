// redux/actions/Actions.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

// Fetch users action creator
export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch({ type: 'FETCH_USERS', payload: response.data });
};

// Delete user action creator
export const deleteUser = (id) => async (dispatch) => {
  await await axios.delete(`http://localhost:5000/users/${id}`);
  dispatch({ type: 'DELETE_USER', payload: id });
};

// Default export for addUser
const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
};

export default addUser;  // Default export
