import { Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MAX_EXPERIENCE } from '../../../utils/const';

const MarkedSlider = ({id, label, setter, value}) => {
    return (
        <Box>
            <Typography id={id+'-label'}>
                {label}
            </Typography>
            <Slider
                id={id}
                data-test={id}
                aria-labelledby={id+'-label'}
                step={1}
                marks
                max={MAX_EXPERIENCE}
                min={0}
                valueLabelDisplay="on"
                onChange={(e,value)=>setter(value)}
                value={value}
            />
        </Box>
    );
};

export default MarkedSlider;