import React, { useState } from 'react';
import { Autocomplete, Box, Button, Checkbox, Divider, Drawer, FormControlLabel, List, ListItem, TextField, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Category } from '../../data/Category';
import { Filters } from '../../data/Filters';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';

type SidebarProps = {
  isOpen: boolean;
  onApplyFilters: (filters: Filters) => void;
  toggleDrawer: (newOpen: boolean) => void;
};

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
      top: 64,
  },
}));


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onApplyFilters, toggleDrawer }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [checked, setChecked] = useState(false);

  const categories = useSelector((state: RootState) => state.categories);

  const handleChange = () => {
    setChecked(!checked);
    setOnlyAvailable(!onlyAvailable);
  };

  const clearFilters = () => {
    setChecked(false);
    setOnlyAvailable(false);
    setSearchQuery("");
    setSelectedCategory(null);
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
          onChange={(e, newValue) => setSelectedCategory(newValue ? newValue : null)}
          disablePortal
          options={categories}
          getOptionLabel={(option) => option.name}
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
      <StyledDrawer
        open={isOpen}
        onClose={toggleDrawer}
        variant='persistent'>
        {DrawerList}
      </StyledDrawer>
    </div>
  );
};

export default Sidebar;

