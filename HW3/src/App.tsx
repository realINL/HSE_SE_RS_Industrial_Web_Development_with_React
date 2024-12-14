import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ProductList from './components/productList/ProductList';
import './App.css';
import { categories} from './data/products';

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };


  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedCategory: "",
    onlyAvailable: false,
  });

  const applyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setIsDrawerOpen(false); 
  };

  return (
    <div className="app">
      <Navbar onSidebarToggle={toggleDrawer} />
      <div className="content">
        <Sidebar isOpen={isDrawerOpen} categories={categories} onApplyFilters={applyFilters} toggleDrawer={toggleDrawer}/> 
        <ProductList filters={filters}/>
      </div>
    </div>
  );
};

export default App;

