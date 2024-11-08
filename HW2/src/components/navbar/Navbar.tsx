import React from 'react';
import './Navbar.css';

type NavbarProps = {
  onSidebarToggle: () => void; 
};

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (
    <div className="navbar">
      <button className="hamburger" onClick={onSidebarToggle}>
        ☰
      </button>
      <nav>
        <ul>
          <li>Товары</li>
          <li>Склады</li>
          <li>О системе</li>
          <li>Профиль</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
