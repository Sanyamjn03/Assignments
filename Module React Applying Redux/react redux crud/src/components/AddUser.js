import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  addUser  from '../redux/actions/Actions';

const AddUser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser({ name: '', email: '', contact: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
      <input name="contact" placeholder="Contact" value={user.contact} onChange={handleChange} />
      <input name="address" placeholder="Address" value={user.address} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
