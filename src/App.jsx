import React, { useEffect, useState } from 'react';
import { get } from './utils/get';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { EmployeeContext } from './context';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function getEmployees(){
        if (employees.length>0) return;
        setLoading(true);
        setEmployees(await get());
        setLoading(false);
    }

    useEffect(()=>{
        getEmployees();
    },[])

    return (
        <EmployeeContext.Provider value={{employees, setEmployees, isLoading}}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </EmployeeContext.Provider>
    );
};

export default App;