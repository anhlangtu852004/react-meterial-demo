import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemButton, ListItemIcon} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MuiList = () => {
    return ( 
        <Box sx={{width: '300px', bgcolor:'#efefef'}} >
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemText primary='this is titile list' />
                </ListItem>
                <ListItem disableGutters>
                    <ListItemText primary='this is titile list' secondary='day la noi dung secondary' />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar>
                            <AccessTimeIcon />
                        </Avatar>
                    </ListItemAvatar>
                        <ListItemText primary='this is titile list' secondary='day la noi dung secondary' />
                </ListItem>
                <ListItemButton disablePadding >
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar>
                                <AccessTimeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='this is titile list' secondary='day la noi dung secondary' />
                    </ListItem>
                </ListItemButton>
                <ListItem disableGutters >
                    <ListItemButton dense>
                        <ListItemAvatar >
                            <Avatar>
                                <AccessTimeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='this is titile list' secondary='day la noi dung secondary' />
                    </ListItemButton>
                </ListItem>
                <ListItem disableGutters alignItems='flex-start' sx={{mt:'10px'}} >
                    
                        <ListItemIcon sx={{display: 'flex',justifyContent: 'center',}}  >
                    
                                <AccessTimeIcon size='large' />
                         
                        </ListItemIcon>
                        <ListItemText primary='this is titile list' secondary='day la noi dung secondary' />
                    
                </ListItem>
            </List>
        </Box>
     );
}
 
export default MuiList;