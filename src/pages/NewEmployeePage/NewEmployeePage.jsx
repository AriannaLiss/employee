import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import { EmployeeContext } from '../../context';
import { EMPTY_EMPLOYEE } from '../../utils/const';
import { getLists } from '../../utils/methods';
import { hasEmpty, isUnique } from '../../utils/validation';
import classes from './NewEmployeePage.module.css';

const NewEmployeePage = () => {
    const {employees, setEmployees} = useContext(EmployeeContext);
    
    const [employee, setEmployee] = useState(EMPTY_EMPLOYEE)
    const [errors, setErrors] = useState([]);

    const router = useNavigate();

    function handleChangeEmployee(field, value){
        setErrors(errors.filter(error => error.field !== field)) 
        setEmployee(prev => { return {...prev, [field]:value} })
    }

    function addEmployee(){
        if (!validateEmployee()) return;
        setEmployees(prev=>[...prev, employee]);
        closeForm();
    }

    function closeForm(){
        setEmployee(EMPTY_EMPLOYEE);
        router('/employees');
    }

    function validateEmployee(){
        setErrors([]);
        return !(hasEmpty(employee, setErrors) || !isUnique(employee.name, 'name', employees, setErrors));
    }

    useEffect(()=>{
        errors.length>0 && console.log('errors', errors)
    },[errors])

    const jobTitles = useMemo(()=>getLists(employees,'jobTitle'),[employees])

    return (
        <div className={classes.container}>
            <EmployeeForm 
                employee={employee} 
                jobTitles={jobTitles} 
                errors={errors} 
                onChange={handleChangeEmployee} 
                submit={addEmployee} 
                close={closeForm}
            />
        </div>
    );
};

export default NewEmployeePage;