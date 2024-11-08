import React from 'react';
import './Sidebar.css';

type SidebarProps = {
  isOpen: boolean; 
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <input type="text" placeholder="Поиск..." />
        <select>
          <option>Все категории</option>
          <option>Электроника</option>
          <option>Одежда</option>
        </select>
        <div className="filter">
          <label>
            <input type="checkbox" /> Только вещи в наличии
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
