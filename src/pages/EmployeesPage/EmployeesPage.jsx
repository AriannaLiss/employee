import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import '@fontsource/roboto/400.css';

const EmployeesPage = () => {

    const router = useNavigate();

    return (
        <>
            <div className="btn-container">
                <Button variant="outlined" onClick={()=> router('/employees/create')} color='inherit'>
                    Add new employee...
                </Button>
            </div>
            <EmployeeTable/>
        </>
    );
};

export default EmployeesPage;