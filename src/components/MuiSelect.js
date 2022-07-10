import { Box, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

const MuiSelect = () => {
    const [country, setCountry] = useState('')
    return ( 
        <Box width='250px' height='500px' backgroundColor='red'  >
            
            <TextField select label='selet contiru' value={country} onChange={(e)=> setCountry(e.target.value)} fullWidth>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Astrailia</MenuItem>
            </TextField>
        </Box>
        // <Box 
        //     sx ={{
        //         width: 250,
        //         bgcolor: 'primary.main'
        //     }}
        // >
        //     MuiSelect1
        // </Box>
     );
}
 
export default MuiSelect;