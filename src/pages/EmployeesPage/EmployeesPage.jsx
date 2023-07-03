import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import '@fontsource/roboto/400.css';
import Header from '../../components/Header/Header';
import classes from './EmployeesPage.module.css'

const EmployeesPage = () => {

    const router = useNavigate();

    return (
        <div className={classes.container}>
            <Header/>
            <div className={classes.btnContainer}>
                <Button variant="outlined" onClick={()=> router('/employees/create')} color='inherit' data-test='addNewEmployee'>
                    Add new employee...
                </Button>
            </div>
            <EmployeeTable/>
        </div>
    );
};

export default EmployeesPage;