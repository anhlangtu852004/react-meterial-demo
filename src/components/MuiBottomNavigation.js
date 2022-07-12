import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useState } from "react";

const MuiBottomNavigation = () => {
    const [value, setValue] = useState('')
    
    return ( 
        <>
            <BottomNavigation  sx={{ width: '100%', position: 'absolute', bottom:0}}
                value={value}
                onChange={(e,newValue) =>setValue(newValue) }
                showLabels
            >
                <BottomNavigationAction value='home' label='home' icon={<AcUnitIcon />} />
                <BottomNavigationAction value='bank' label='bank' icon={<AccountBalanceIcon />} />
                <BottomNavigationAction value='email' label='email' icon={<AlternateEmailIcon />} />
            </BottomNavigation>
        </>
     );
}
 
export default MuiBottomNavigation;