import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
    const router = useNavigate();
    return ( 
        <Typography className={classes.header} variant="h3" component="h1" onClick={()=> router('/employees/')}>
            corporate employees
        </Typography>
    );
};

export default Header;