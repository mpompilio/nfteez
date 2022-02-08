import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Breakout Room #10
      </div>
    </footer>
  );
};

export default Footer;