import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import { useState } from 'react';

const MuiButtonCheckbox = () => {

    const [job, setJob] = useState(false)
    
    const handleChange = (e) => {
        setJob(e.target.checked)
    }

    const [skills, setSkills] = useState([])
    console.log(skills);
    const handleSkill = (event) => {
        const idx = skills.indexOf(event.target.value)
        if(idx === -1){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter(skill => skill !== event.target.value))
        }
    }

    return ( 
        <Box >
            <Box m={5}>
                <FormControlLabel label='i acccep Job' control={<Checkbox checked={job} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox  icon={<BookmarkBorderOutlinedIcon />} checkedIcon={<BookmarkOutlinedIcon />} 
                    checked={job} onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        slkills
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel 
                            value='html' 
                            label='HTMl' 
                            control={<Checkbox />}
                            checked={skills.includes('html')}
                            onChange={handleSkill}
                        />

                        <FormControlLabel 
                            value='java' 
                            label='JAVA' 
                            control={<Checkbox />} 
                            checked={skills.includes('java')}
                            onChange={handleSkill}
                        />
                        <FormControlLabel 
                            value='python' 
                            label='PYTHON' 
                            control={<Checkbox />} 
                            checked={skills.includes('python')}
                            onChange={handleSkill}
                        />
                    </FormGroup>
                    <FormHelperText>this FormHelperText</FormHelperText>
                </FormControl>
            </Box>
        </Box>
     );
}
 
export default MuiButtonCheckbox
