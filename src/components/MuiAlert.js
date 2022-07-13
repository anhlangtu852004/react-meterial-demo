import { Box,Alert, AlertTitle, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const MuiAlert = () => {

    return (  
        <Box sx={{width: 500, p:'30px'}}>
            <Alert severity="error">
                <AlertTitle>erro</AlertTitle>
                this is alert
            </Alert>
            <Alert severity="success">this is success</Alert>
            <Alert severity="info">this is info</Alert>
            <Alert severity="warning">this is warning</Alert>

            <Alert variant='outlined' severity="error" icon={<DeleteIcon fontSize='inherit'/>}
                onClose={()=>alert('click on close')}
            >
                this is alert
            </Alert>
            <Alert variant='outlined' severity="success"
                action={
                    <Button color='inherit' size='small'>UNDO</Button>
                }
            >
                this is success
            </Alert>
            <Alert variant='outlined' severity="info">this is info</Alert>
            <Alert variant='outlined' severity="warning">this is warning</Alert>

            <Alert variant='filled' severity="error">this is alert</Alert>
            <Alert variant='filled' severity="success">this is success</Alert>
            <Alert variant='filled' severity="info">this is info</Alert>
            <Alert variant='filled' severity="warning">this is warning</Alert>
        </Box>
    );
}
 
export default MuiAlert;