import { SpeedDial, SpeedDialAction,SpeedDialIcon } from "@mui/material";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const MuiSpeedDial = () => {
    return ( 
       <SpeedDial sx={{position: 'absolute', bottom: 16, right : 16}}
                icon={<SpeedDialIcon openIcon={<AddAPhotoIcon/>} /> }
                ariaLabel='spaeeedial'
            >
                <SpeedDialAction icon={<ContentCopyIcon /> } tooltipTitle='copy'/>
                <SpeedDialAction icon={<ShareIcon /> } tooltipTitle='share'/>
                <SpeedDialAction icon={<LocalPrintshopIcon /> } tooltipTitle='print'/>
        </SpeedDial>
        
        // <SpeedDial
        // ariaLabel="SpeedDial basic example"
        // sx={{ position: 'absolute', bottom: 16, right: 16 }}
        // icon={<SpeedDialIcon />}
        // >
        
        //     <SpeedDialAction icon={<ContentCopyIcon /> } tooltipTitle='copy'/>
        //      <SpeedDialAction icon={<ShareIcon /> } tooltipTitle='share'/>
        //       <SpeedDialAction icon={<LocalPrintshopIcon /> } tooltipTitle='print'/>
          
    
        // </SpeedDial>


     );
}
 
export default MuiSpeedDial;