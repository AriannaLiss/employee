import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { getErrorMsg, hasError } from '../../utils/methods';
import AddSelector from '../UI/AddSelector/AddSelector';
import MarkedSlider from '../UI/MarkedSlider/MarkedSlider';
import Selector from '../UI/Selector/Selector';
import classes from './EmployeeForm.module.css'

const EmployeeForm = ({jobTitles, employee, onChange, submit,close,errors}) => {

    return (
        <Box
            component="form"
            sx={{
                width:'25rem',
                '& .MuiTextField-root': { m: 1, width: '50ch' },
                '& .MuiFormControl-root': { m: 1, width: '50ch' },
                '& .MuiBox-root': { m: 1, width: '50ch' },
                '& .MuiButton-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                error={hasError(errors,'name')}
                autoFocus
                id='name' 
                label='Name' 
                value={employee.name} 
                onChange={(e)=>onChange('name',e.target.value)} 
                helperText={getErrorMsg(errors,'name')}
            />
            <AddSelector
                id='jobTitle'
                value={employee.jobTitle}
                setter={(value)=>onChange('jobTitle',value)}
                options={jobTitles}
                label="Job Title"
                errors={errors}
            />
            <MarkedSlider
                id='tenure'
                label='Tenure'
                setter={(value)=>onChange('tenure',value)}
                value={employee.tenure}
            />
            <Selector 
                id='gender'
                label='Gender'
                value={employee.gender} 
                onChange={(e)=>onChange('gender',e.target.value)} 
                options={['Male','Female']}
            />
                
            <div className={classes.btnContainer}>
                <Button variant="text" onClick={close}>
                        Cancel
                </Button>
                <Button variant="outlined" onClick={submit}>
                        Save
                </Button>
            </div>
        </Box>
    );
};

export default EmployeeForm;