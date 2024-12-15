import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type NavbarProps = {
  onSidebarToggle: () => void;
};


const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (

    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}

          onClick={onSidebarToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ ml: "auto" }}>

          <Button
            sx={{ textTransform: 'none' }}
            color="inherit"
          >
            Товары
          </Button>

          <Button
            sx={{ textTransform: 'none' }}
            color="inherit"
          >
            Категории
          </Button>

          <Button
            sx={{ textTransform: 'none' }}
            color="inherit"
          >
            О системе
          </Button>

          <Button
            sx={{ textTransform: 'none' }}
            color="inherit"
          >
            Профиль
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

