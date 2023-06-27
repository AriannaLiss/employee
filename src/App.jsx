import React, { useEffect, useState } from 'react';
import './App.css'
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import Loader from './components/UI/Loader/Loader';
import { get } from './utils/get';

const App = () => {

    const [employees, setEmployess] = useState([]);
    const [isLoading, setLoading] = useState(true)

    async function getEmployees(){
        if (employees.length>0) return;
        setLoading(true)
        setEmployess(await get());
        setLoading(false)
    }

    useEffect(()=>{
        getEmployees();
    })
    return (
        <>
            <EmployeeTable data={employees}/>
            {isLoading?<Loader/>:''}
        </>
    );
};

export default App;