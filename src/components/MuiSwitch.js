import {Box, FormControlLabel, FormGroup, Switch } from '@mui/material';
import React, { useState } from 'react';




const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('off');
    console.log(checked);
    console.log(value);

    const handleChange = (e) => {
        setValue(e.target.checked? 'on' : 'off')
        setChecked(e.target.checked)
        

    }
    return (
        <Box>
            <FormControlLabel 
                label='dark mode' 
                control={<Switch />} 
                checked={checked}
                onChange={handleChange}
                value={value}
            />
            <FormGroup>
                <FormControlLabel label='setting iphone' control={<Switch />} />
                <FormControlLabel label='setting androi' control={<Switch />} />
                <FormControlLabel label='setting mui' control={<Switch />} />
            </FormGroup>
        </Box>
      );
}
 
export default MuiSwitch;