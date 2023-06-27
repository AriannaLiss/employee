import { Paper, Table, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getComparator } from '../../utils/methods';
import EmployeeTableBody from '../EmployeeTableBody/EmployeeTableBody';
import EmployeeTableHead from '../EmployeeTableHead/EmployeeTableHead';

const EmployeeTable = ({data}) => {
    
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(null);
    const [sortedData, setSortedData] = useState(data);

    const handleRequestSort = (e, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function sortData(){
        setSortedData(data.slice().sort(getComparator(order, orderBy)))
    }

    useEffect(sortData, [data, order, orderBy])

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWIdth: 750}}
                size = 'small'
            >
                <EmployeeTableHead 
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}/>
                <EmployeeTableBody rows={sortedData}/>
            </Table>
            
        </TableContainer>
    );
};

export default EmployeeTable;