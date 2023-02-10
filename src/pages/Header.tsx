import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Assignment
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <Button sx={{ color: 'white' }} color="inherit">Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/data'>
                        <Button sx={{ color: 'white' }} color="inherit">Data</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;