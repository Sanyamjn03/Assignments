import React from 'react';
import './Table.css';
import EditModal from './EditModal';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className="crud-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>{item.address}</td>
            <td>
              <button className="edit-btn" onClick={() => EditModal(item)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => onDelete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
