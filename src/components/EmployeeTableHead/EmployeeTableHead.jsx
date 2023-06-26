import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';


const EmployeeTableHead = ({ order, orderBy, onRequestSort }) => {
    const headCells = [
        {id:'name', label:'Name'},
        {id:'jobTitle', label:'Job Title'},
        {id:'tenure', label:'Tenure'},
        {id:'gender', label:'Gender'}
    ];
    
    return (
        <TableHead >
            <TableRow>
                {headCells.map(headCell => 
                    <TableCell
                        key={headCell.id}
                        align='left'
                        sx={{bgcolor:'grey', color:'white'}}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={e => onRequestSort(e, headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
    );
};

export default EmployeeTableHead;