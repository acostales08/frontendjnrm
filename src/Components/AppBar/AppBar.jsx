import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { dashboardContext } from '../Dashboard-layout/DashboardLayout';

export default function ButtonAppBar() {

  const {setOpen, open} = useContext(dashboardContext)
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: '#F8E8EE', color: '#787878'}}>
          <Toolbar>
            <IconButton
              onClick={() => setOpen(!open)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FaBars size={20}  className='cursor-pointer'/>
            </IconButton>
            
            <Button color="inherit" >
              <Link to='/login'>Login</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>      
 
  );
}