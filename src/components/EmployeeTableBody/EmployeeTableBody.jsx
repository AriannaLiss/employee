import { styled, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
  
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
                <StyledTableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align='left'>{row.jobTitle}</TableCell>
                    <TableCell align='left'>{row.tenure}</TableCell>
                    <TableCell align='left'>{row.gender}</TableCell>
                </StyledTableRow>
            )}
        </TableBody>
    );
};

export default EmployeeTableBody;