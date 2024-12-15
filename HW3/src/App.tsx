import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ProductList from './components/productList/ProductList';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Filters } from './data/Filters';


const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };


  const [filters, setFilters] = useState<Filters>(
    {searchQuery: "", selectedCategory: null, onlyAvailable: false}
  );

  const applyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Router>
        <Navbar onSidebarToggle={toggleDrawer} />
        <Sidebar isOpen={isDrawerOpen} onApplyFilters={applyFilters} toggleDrawer={toggleDrawer} />

        <div className="content">
          <ProductList filters={filters}/>
        </div>
      </Router>
    </>
  );
};

export default App;

