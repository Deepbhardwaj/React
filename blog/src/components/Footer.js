import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 My Blog. All rights reserved.</p>
      <p>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;