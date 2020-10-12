import React from 'react';

function Header({ children }) {
  return (
    <header>
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashbaord</h1>
            <p className="header-total">Total Folowers: 23,004</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;