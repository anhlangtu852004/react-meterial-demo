import { Rating, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MuiRateing = () => {
    const [value, setValue] = useState(2);
    console.log(value);
    const handleChange = (e,newValue) => {
        setValue(newValue)
    }

    return ( 
        <>
            <Stack>
                <Typography>this label</Typography>
                <Rating 
                    value={value} 
                    onChange={handleChange} 
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" color="secondary" />}
                    emptyIcon={<FavoriteBorderIcon color="primary"/>}
                    // readOnly
                    highlightSelectedOnly
                />
            </Stack>
            <h1>h1</h1>
        </>
     );
}
 
export default MuiRateing;