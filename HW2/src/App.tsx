import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ProductList from './components/productList/ProductList';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); 
  };

  return (
    <div className="app">
      <Navbar onSidebarToggle={toggleSidebar} />
      <div className="content">
        <Sidebar isOpen={isSidebarOpen} />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
