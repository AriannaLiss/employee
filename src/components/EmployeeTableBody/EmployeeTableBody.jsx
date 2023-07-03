import { styled, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { FIELDS } from '../../utils/const';
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const EmployeeTableBody = ({rows}) => {
    return (
        <TableBody>
            {rows.map(row => 
                <StyledTableRow key={row.name} data-test={`table-row-${row.name}`}>
                    {FIELDS.map(field=>
                        <TableCell align='left' data-test={`table-cell-${field.id}`} key={`table-cell-${row.name}-${field.id}`}>{row[field.id]}</TableCell>
                    )}
                </StyledTableRow>
            )}
        </TableBody>
    );
};

export default EmployeeTableBody;