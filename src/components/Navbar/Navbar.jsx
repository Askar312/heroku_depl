import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assetcs/images/navbar/logo.svg"
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"


const pages = [
  { name: 'Главная', link: '/', id: 1 },
  { name: 'О Магазине', link: '/aboutus', id: 2 },
  { name: 'Контакты', link: '/contacts', id: 7 },
  { name: 'Товары', link: '/products', id: 4 },
  { name: 'Кредит', link: '/credit', id: 9 },
  { name: 'Гарантия', link: '/warranty', id: 10 },
  { name: 'Доставка', link: '/delivery', id: 11 },




];
 

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:"#212121", height:40}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                  <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {pages.map((page) => (
              <Link to={page.link}>
              <Button className='page-btn'
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'white', display: 'block',fontSize:10 }}
              >
                {page.name}
              </Button>
              
              </Link>
            ))}
          </Box>

        
            <Typography  variant='h5'>
            <Button className='page-btn' sx={{marginBottom:"20px",  color: 'white', display: 'block',fontSize:11,padding:"0"}}> Вход</Button></Typography>
            
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
