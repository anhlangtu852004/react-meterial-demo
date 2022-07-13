import { Box, Stack, Skeleton, Typography} from '@mui/material'
import { useEffect, useState } from 'react';

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])
    return ( 
        <Box sx = {{width:'250px'}}>
            {
                loading ? (<Skeleton animation='wave' variant='rectangle' width={250} height={125} />)
                        : (<img src='https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/2/2020/09/8f226a29af9b1a4e14d6b1ad471d4401ab24d208_charles-deluvio-733126-unsplash-250x125.jpg' 
                            width={250}
                            height={125}
                            alt='' />
                        )
            }
            <Stack>
                { loading ? (
                                <Typography >
                                    <Skeleton />    
                                </Typography>
                            )
                        :(
                            <Typography >
                                   noid udng
                            </Typography>
                        )
            }
            </Stack>
        </Box>
        
    );
}
 
export default MuiSkeleton;