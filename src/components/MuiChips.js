import { Box,Stack, Chip, Avatar } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiChips = () => {
    return ( 
        <Box width='500px' >
            
            <Chip label='chip1'  />
            <Chip label='chip1 outlined' variant='outlined' />
            <Chip label='chip1 color seacondary' variant='outlined' color='secondary' />
            <Chip label='chip1 color seacondary' variant='outlined' color='secondary' 
                onClick={()=> alert('onclick')}
            />
             <Chip label='chip1 color seacondary' variant='outlined' color='secondary' 
                onClick={()=> alert('onclick')}
                onDelete={()=> alert('ondelete')}
            />
            <Chip avatar={<Avatar>MT</Avatar>} label='have avatar'/>
            <Chip icon={<AirplanemodeActiveIcon/>} label='have avatar'/>
            <Chip label='change dele icon' onDelete deleteIcon={<DeleteIcon/>} />
        </Box>
     );
}
 
export default MuiChips;