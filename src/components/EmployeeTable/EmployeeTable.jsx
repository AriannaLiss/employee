import { Paper, Table, TableContainer } from '@mui/material';
import React from 'react';
import EmployeeTableBody from '../EmployeeTableBody/EmployeeTableBody';
import EmployeeTableHead from '../EmployeeTableHead/EmployeeTableHead';

const EmployeeTable = ({data}) => {
    
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');

    const handleRequestSort = (e, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) return -1;
        if (b[orderBy] > a[orderBy]) return 1;
        return 0;
    }
  
    function getComparator(order, orderBy) {
        console.log('orderBy', orderBy)
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const sortedData = React.useMemo(() => 
        data.slice().sort( getComparator(order, orderBy) ),
        [order, orderBy])
  

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