import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const MuiTooltip = () => {
    return ( 
        <>
            <Tooltip title='giai thich delete' arrow placement="right"> 
                <IconButton>
                    <DeleteIcon/>

                </IconButton>
            </Tooltip>
        </>
     );
}
 
export default MuiTooltip;