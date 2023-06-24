import React, { useEffect, useState } from 'react';
import './App.css'
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import { get } from './utils/fetch';

const App = () => {
    const [employees, setEmployess] = useState([]);

    async function getEmployees(){
        if (employees.length>0) return;
        setEmployess(await get());
        console.log('app empl', employees)
    }

    useEffect(()=>{
        getEmployees();
    })
    return (
        <div>
            <EmployeeTable data={employees}/>
        </div>
    );
};

export default App;