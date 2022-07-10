import { Box, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState([])

    const handleContries = (e) => {
        const stringValueContries = e.target.value
        setCountries( typeof(stringValueContries) === "string" ? stringValueContries.split(',') : stringValueContries)
    }

    return ( 
        <Box width='250px' height='500px' backgroundColor='red' pt={8}  >
            
            <TextField   sx={{ width: 300 }} select label='selet contiru' mt={8} value={country}  onChange={(e)=> setCountry(e.target.value)} >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Astrailia</MenuItem>
            </TextField>

            <TextField   
                sx={{ width: 300 }} 
                select 
                label='selet nhieu contries' 
                mt={8} value={countries}  
                onChange={handleContries} 
                SelectProps={{
                    multiple: true
                }}
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Astrailia</MenuItem>
            </TextField>

            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='IN'>India</MenuItem>
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