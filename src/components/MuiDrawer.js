import { Drawer, Box, Typography,IconButton, Menu } from "@mui/material";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawer = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (  
        <>
            <IconButton size = 'large' onClick={() => setOpen(true)} >
                <MenuIcon  />
            </IconButton>
            <Drawer       
                anchor="left"    
                open={open}
                onClose= {handleClose}
            >
                <Box textAlign='center'  width='350px'>
                    <Typography >this content</Typography>
                </Box>
            </Drawer>
        </>
    );
}
 
export default MuiDrawer;