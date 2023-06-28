import React, { useEffect, useState } from 'react';
import './App.css'
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import Loader from './components/UI/Loader/Loader';
import Button from '@mui/material/Button';
import { get } from './utils/get';
import './App.css'
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import { getLists } from './utils/methods';

const emptyEmployee={
    name:'',
    jobTitle:'',
    tenure:1,
    gender:''
}

const NOT_EMPTY_FIELDS=['name', 'jobTitle']

const App = () => {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [jobTitles, setJobTitles] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [employee, setEmployee] = useState(emptyEmployee);
    const [errors, setErrors] = useState([]);

    async function getEmployees(){
        if (employees.length>0) return;
        setLoading(true);
        setEmployees(await get());
        setLoading(false);
    }

    function handleChangeEmployee(field, value){
        setEmployee(prev => { return {...prev, [field]:value} })
    }

    function addEmployee(){
        if (!validateEmployee()) return;
        setEmployees(prev=>[...prev, employee])
        setEmployee(emptyEmployee);
        setShowForm(false);
    }

    function closeFrom(){
        setEmployee(emptyEmployee);
        setShowForm(false);
    }

    function validateEmployee(){
        setErrors([]);
        return !(hasEmpty() || !isNameUnique());
    }

    function hasEmpty(){
        let err = false
        Object.entries(employee).forEach(([key,value]) => {
            if (!NOT_EMPTY_FIELDS.includes(key)) return;
            if (typeof value === 'string' && value.trim().length===0){
                setErrors(prev=>[...prev, {field:key, message:`This field shouldn't be empty.`}])
                err = true;
            }
        })
        return err;
    }
    
    function isNameUnique(name=employee.name){
        const hasName = employees.some(empl => empl.name.trim().toLowerCase() === name.trim().toLowerCase());
        if (hasName) setErrors(prev=>[...prev,{field:'name', message:'User with such name already exists.'}])
        return !hasName;
    }

    useEffect(()=>{
        getEmployees();
    },[])

    useEffect(()=>{
        setJobTitles(getLists(employees,'jobTitle'));
    },[employees])

    useEffect(()=>{
        console.log('errors', errors)
    },[errors])

    return (
        <>
            <div className="btn-container">
                <Button variant="outlined" onClick={()=> setShowForm(!showForm)}>
                    Add new employee...
                </Button>
            </div>
            {showForm?
                <EmployeeForm 
                    jobTitles={jobTitles} 
                    employee={employee} 
                    onChange={handleChangeEmployee} 
                    submit={addEmployee}
                    close={closeFrom}
                    errors={errors}
                />:''}
            <EmployeeTable data={employees}/>
            {isLoading?<Loader/>:''}
        </>
    );
};

export default App;