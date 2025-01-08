import React from 'react';

import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <h1 style={{ fontSize: '50px' }}>
      <i class="fa-solid fa-database" style={{'fontSize':'100px',marginRight:'10%'}}></i>

        React CRUD App JSON-Server with Redux-Thunk
        <img src='/public/img/react.svg'></img>
      </h1>
     
     
    </div>
  );
};

export default Header;
