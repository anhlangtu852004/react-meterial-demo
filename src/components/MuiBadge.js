import { Stack, Badge, IconButton } from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';

const MuiBadge = () => {
    return ( 
        <Stack direction='row' spacing={4}>
            <Badge badgeContent={3} color='secondary'>
                <EmailIcon/>
            </Badge>    
            <Badge badgeContent={0} color='secondary' showZero>
                <EmailIcon/>
            </Badge> 
            
            <Badge badgeContent={100} color='secondary' max={100}>
                <EmailIcon/>
            </Badge> 
            
            <Badge 
                badgeContent={100} 
                color='secondary' 
                variant="dot"
            >
                <EmailIcon/>
            </Badge> 
            <Badge 
                badgeContent={100} 
                color='secondary' 
                variant="dot"
                invisible
            >
                <EmailIcon/>
            </Badge> 
            <Badge 
                badgeContent={56} 
                color='secondary' 
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'top'
                }}
            >
                <EmailIcon/>
            </Badge> 
            <IconButton aria-label='bototon' sx={{marginTop:'-30px'}} >
                <Badge 
                    badgeContent={56} 
                    color='secondary' 
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                >
                    <EmailIcon/>
                </Badge> 
            </IconButton>
        </Stack> 
    );
}
 
export default MuiBadge;