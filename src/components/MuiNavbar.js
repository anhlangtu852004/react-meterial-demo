import { AppBar, Toolbar, IconButton, Typography, Box,Button } from '@mui/material'

import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

const MuiNavbar = () => {
    return ( 
        <>
            <AppBar >
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'    
                    >
                        <SettingsPowerIcon />

                    </IconButton>
                    <Typography variant='h5' sx={{flexGrow:'1'}}> Logo</Typography>
                    <Box>
                        <Button color='inherit' >home</Button>
                        <Button color='inherit' >about</Button>
                        <Button color='inherit' >contact</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default MuiNavbar;