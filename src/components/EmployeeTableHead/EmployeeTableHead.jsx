import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const EmployeeTableHead = () => {
    const headCells = ['Name', 'Job Title', 'Tenure', 'Gender'];
    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => 
                    <TableCell
                        key={headCell}
                        align='left'
                        backgroundColor = 'grey'
                        color ='fff'
                        // sortDirection={false}
                    >
                        {headCell}
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
    );
};

export default EmployeeTableHead;