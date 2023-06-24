import { Table, TableContainer } from '@mui/material';
import React from 'react';
import EmployeeTableBody from '../EmployeeTableBody/EmployeeTableBody';
import EmployeeTableHead from '../EmployeeTableHead/EmployeeTableHead';

const EmployeeTable = ({data}) => {

    return (
        <TableContainer>
            <Table
                sx={{ minWIdth: 750}}
                size = 'medium'
            >
                <EmployeeTableHead/>
                <EmployeeTableBody rows={data}/>
            </Table>
            
        </TableContainer>
    );
};

export default EmployeeTable;