import { CircularProgress } from '@mui/material';
import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader-container'>
            <CircularProgress/>
        </div>
    );
};

export default Loader;