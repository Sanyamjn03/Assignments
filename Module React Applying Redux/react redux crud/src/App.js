import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from './redux/actions/Actions';
import Header from './components/Header';
import Table from './components/Table';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import AddUser from './components/AddUser';

const App = () => {
const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <Header />
      <AddUser/>
    
      <Table data={users} onDelete={handleDelete} />
    </div>
  );
};

export default App;
