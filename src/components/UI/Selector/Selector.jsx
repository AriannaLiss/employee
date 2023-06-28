import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Selector = ({label, id, value, onChange, options}) => {
    return (
        <FormControl fullWidth >
            <InputLabel id="gender-label">{label}</InputLabel>
            <Select
                labelId="gender-label"
                id={id}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options? options.map(opt => 
                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                ):''}    
            </Select>
        </FormControl>
    );
};

export default Selector;