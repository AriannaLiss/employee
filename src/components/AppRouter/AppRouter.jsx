import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EmployeeContext } from '../../context';
import EmployeesPage from '../../pages/EmployeesPage/EmployeesPage';
import NewEmployeePage from '../../pages/NewEmployeePage/NewEmployeePage';
import Loader from '../UI/Loader/Loader';

const AppRouter = () => {
    const {isLoading} = useContext(EmployeeContext);
    if (isLoading) return <Loader/>
    return (
        <Routes>
            <Route path='/employees' element={<EmployeesPage/>}/>
            <Route path='/employees/create' element={<NewEmployeePage/>}/>
            <Route path='/' element={<Navigate to ='/employees'/>}/>
        </Routes>
    );
};

export default AppRouter;