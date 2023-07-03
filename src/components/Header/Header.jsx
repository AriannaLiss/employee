import { Typography } from '@mui/material';
import React from 'react';
import cl from './Header.module.css'

const Header = () => {

    return ( 
        <Typography variant="h3" component="h1" className={cl.header}>
            corporate employees
        </Typography>
    );
};

export default Header;
