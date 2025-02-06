import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

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
            component={Link}
            to="/"
          >
            Товары
          </Button>

          <Button
            sx={{ textTransform: 'none' }}
            color="inherit"
            component={Link}
            to="/categories"
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
            component={Link}
            to="/profile"
          >
            Профиль
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

