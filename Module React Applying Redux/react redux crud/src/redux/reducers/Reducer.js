// redux/reducers/userReducer.js
const initialState = {
  users: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],  // Add the new user to the array
      };
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
