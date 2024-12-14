import React, { useState } from 'react';
// import './Sidebar.css';
import { Autocomplete, Box, Button, Checkbox, Divider, Drawer, FormControlLabel, List, ListItem, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
type SidebarProps = {
  isOpen: boolean;
  categories: String[];
  onApplyFilters: (filters: { searchQuery: string; selectedCategory: string; onlyAvailable: boolean }) => void;
  toggleDrawer: (newOpen: boolean) => void;
};




const Sidebar: React.FC<SidebarProps> = ({ isOpen, categories, onApplyFilters, toggleDrawer }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setOnlyAvailable(!onlyAvailable);
  };

  const clearFilters = () => {
    setChecked(false);
    setOnlyAvailable(false);
    setSearchQuery("");
    setSelectedCategory("");
  };

  const applyFilters = () => {
    onApplyFilters({ searchQuery, selectedCategory, onlyAvailable });
  };



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <TextField
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: 300 }}
            id="outlined-search"
            label="Поиск..."
            type="search"
            variant="outlined" />
        </ListItem>
      </List>
      <ListItem>
        <Autocomplete
          value={selectedCategory}
          onChange={(e, newValue) => setSelectedCategory(newValue ? String(newValue) : "")}
          disablePortal
          options={categories}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Категория" />}
        />
      </ListItem>
      <ListItem>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label="Товары в наличии" />
      </ListItem>

      <Divider />

      <ListItem>
        <Button
          onClick={applyFilters}
          variant="contained"
          sx={{ containerC: "#007bff", width: 300 }}
          startIcon={<SearchIcon />}>
          Искать!
        </Button>
      </ListItem>

      <ListItem>
        <Button
          onClick={clearFilters}
          variant="outlined"
          sx={{ width: 300 }}
        >Очистить фильтры
        </Button>
      </ListItem>

    </Box>
  );

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Sidebar;

