import { Stack, TextField, InputAdornment,IconButton } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Password';

import { useState } from 'react';


const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const MuiTextField = () => {
    const [ value, setValue]  = useState('' || 'nhap pass vao')

    const handleChangeValue = (e) => {
        
        setValue(e.target.value)
    }

    return ( 
        <Stack spacing={2}>
            <Stack spacing={4} direction='row'>
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack spacing={4} direction='row'>
                <TextField error label='Name' variant='filled' />
                <TextField  label='Name' variant='outlined' />
                <TextField disabled label='Name' variant='standard' helperText='this helper texts' />
                <TextField type='password' label='password' variant='standard' helperText='this helper texts' />
                {/* <TextField disable label='Name' variant='standard' /> */}
            </Stack>
            <Stack spacing={4} direction='row'>
            
                <TextField   label="Helper text" variant='outlined' helperText='this helper texts'  defaultValue="Default Value" />
                <TextField type='search' label='search' variant ='standard' helperText='this helper texts' />
                <TextField type='number' label='number' variant='standard' helperText='this helper texts' />
                <TextField type='password' label='password' variant='standard' helperText='this helper texts' focused />
                <TextField select label='select' variant='standard' helperText='this helper texts' SelectProps={{ native: true,}}>
                    {/* {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))} */}
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </TextField>
                {/* <TextField disable label='Name' variant='standard' /> */}
            </Stack>
            <Stack spacing={4} direction='row'>
                <TextField label='amount' InputProps={ {startAdornment: <InputAdornment position='start' >$</InputAdornment>}} />
                <TextField label='weight'InputProps={ {endAdornment: <InputAdornment  position='end'>kg</InputAdornment>}}/>
                <TextField label='weight'InputProps={ {endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}/>
                <TextField label='pass'InputProps={ {
                    endAdornment: <InputAdornment position='end'>
                                        <IconButton><PasswordIcon/></IconButton>
                                    </InputAdornment>}}/>
              
            </Stack>
            <Stack spacing={4} direction='row'>
            
                <TextField 
                    value={value }
                    error={ !value }
                    onChange={handleChangeValue}
                    label="Helper text" 
                    variant='outlined' 
                    helperText={ !value ? 'required' : 'do not shared'}  
                />
              
            </Stack>
        </Stack>
     );
}
 
export default MuiTextField;