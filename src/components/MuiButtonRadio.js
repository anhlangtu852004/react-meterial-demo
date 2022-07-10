import {Box,
        FormControl,
        FormLabel,
        FormControlLabel,
        RadioGroup,
        Radio,
        FormHelperText,
} from '@mui/material'

const MuiButtonRadio = () => {
    return (  
        <Box>
            <FormControl error >
                <FormLabel >
                    Year of Experience
                </FormLabel>
                <RadioGroup 
                    name='job-experience-group'
                    row
                    defaultValue='3'
                >
                    <FormControlLabel labelPlacement='top' control ={<Radio />} label='3' value='3' />
                    <FormControlLabel labelPlacement='bottom' control ={<Radio />} label='2' value='2' />
                    <FormControlLabel labelPlacement='start' control ={<Radio />} label='4' value='4' />
                    <FormControlLabel control ={<Radio />} label='0-2' value='0-2' />
                    <FormControlLabel  control ={<Radio />} label='1-4' value='1-4' />
                    <FormControlLabel control ={<Radio />} label='2-3' value='2-3' />
                    <FormControlLabel control ={<Radio />} label='3-5' value='3-5' />
                </RadioGroup>
                <FormHelperText>this is FormHelperText</FormHelperText>
            </FormControl>
        </Box>
    );
}
 
export default MuiButtonRadio;