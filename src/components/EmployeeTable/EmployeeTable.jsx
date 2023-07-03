import { Paper, Table, TableContainer } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useContext } from 'react';
import { EmployeeContext } from '../../context';
import { sortArr } from '../../utils/methods';
import EmployeeTableBody from '../EmployeeTableBody/EmployeeTableBody';
import EmployeeTableHead from '../EmployeeTableHead/EmployeeTableHead';

const EmployeeTable = () => {

    const {employees} = useContext(EmployeeContext);
    
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(null);

    const handleRequestSort = (e, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedData = useMemo(()=>sortArr(employees, order, orderBy), 
        [employees, order, orderBy])

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWIdth: 750}}
                size = 'small'
                data-test= 'employeeTable'
            >
                <EmployeeTableHead 
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <EmployeeTableBody rows={sortedData}/>
            </Table>
        </TableContainer>
    );
};

export default EmployeeTable;