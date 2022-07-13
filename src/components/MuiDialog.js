import { Button, Dialog,DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react';

const MuiDialog = () => {

    const [ open, setOpen] = useState(false)
    

    return ( 
        <>
            <Button  onClick={()=>setOpen(true)}>submit</Button>
            <Dialog open={open} onClick={()=>setOpen(false)}>
                <DialogTitle>Form is submit</DialogTitle>
                <DialogContent>
                    <DialogContentText>aure you sure to sumbit thi lnoi dunlajdf ladjf;la djfadf aldfj adsaadjflkadjf alkdfj aldfj aldfk jasldk</DialogContentText>
                    
                </DialogContent>
                <DialogActions>
                    <Button  onClick={()=>setOpen(false)}>cancel</Button>
                    <Button  onClick={()=>setOpen(false)}>agree</Button>
                </DialogActions>
            </Dialog>
        </>
     );
}
 
export default MuiDialog;