import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from 'react';


const skills = ['java', 'php', 'python']
const skillsOption = [
    {
        id: 1,
        label: 'java2'
    },
    {
        id: 2,
        label: 'php2'
    },
    {
        id: 3,
        label: 'python2'
    },
]

const MuiAutocomplete = () => {
    
    const [value, setValue] = useState(null);
    const [valueOption, setValueOption] = useState(null)
    console.log(valueOption)

    return ( 
        <>
            <Stack p={8} width= '300px' >
                <Autocomplete 
                    options={skills}
                    renderInput={(params) => <TextField {...params} label='soft where' />}
                    value={value}
                    onChange={(e, newValue) => setValue(newValue) }
                    freeSolo
                />
                <Autocomplete 
                    options={skillsOption}
                    renderInput={(params) => <TextField {...params} label='skill options'/>}
                    value={valueOption}
                    onChange={(e,newValue) => {setValueOption(newValue)}}
                    // open
                    // openOnFocus
                    // selectOnFocus
                    // clearOnBlur

                />
                
            </Stack>
        </>
     );
}
 
export default MuiAutocomplete;