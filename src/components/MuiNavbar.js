import { AppBar, Toolbar, IconButton, Typography, Box,Button, Menu, MenuItem } from '@mui/material'

import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from 'react';

const MuiNavbar = () => {

    const [anchoEl, setAnchoEl] = useState(null)
    const open = Boolean(anchoEl)
    const handleClick = (e) =>{
        setAnchoEl(e.target)
    }

    const handleClose = () => {
        setAnchoEl(null)
    }
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
                        <Button color='inherit'  onClick={handleClick}     endIcon={<KeyboardArrowDownOutlinedIcon/>}>about</Button>
                        <Button color='inherit' >contact</Button>
                    </Box>

                </Toolbar>
                <Menu 
                    anchorEl={anchoEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical:'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleClose}>time</MenuItem>
                    <MenuItem onClick={handleClose}>history</MenuItem>
                </Menu>
            </AppBar>
        </>
     );
}
 
export default MuiNavbar;