import { Stack, CircularProgress,LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";


const MuiProgress = () => {
    
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const timerId= setInterval(()=>{
            setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10))
        },1000)
        return () => clearInterval(timerId)
    },[])
    
    return ( 
        <Stack  spacing={2}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress  variant="determinate" value={progress} color="success" />
            <Typography >{progress}%</Typography>

            <LinearProgress />
            <LinearProgress color="secondary" />
            <LinearProgress  variant="determinate" value={progress} color="success" />

            <Box sx={{ position: 'relative' , display: 'inline-flex',justifyContent: 'center',
                   alignItems: 'center',}}>
                <CircularProgress  variant="determinate" value={progress} color="success"  />
                {/* <CircularProgress  variant="determinate" value={progress} color="success"  /> */}
                <Typography component='span'
                    sx={{ position: 'absolute', }}
                >
                    {progress}%
                </Typography>
                <CircularProgress />
            </Box>
            <Box sx={{ position: 'relative' , display: 'inline'}}>
                     <Typography component='span'>thioadfladj  </Typography>
                     <Typography component='span'>thioadfladj  </Typography> 
            </Box>
        </Stack>
     );
}


export default MuiProgress;