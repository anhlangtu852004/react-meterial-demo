import React from "react";
import { Button, Snackbar,IconButton, Alert } from "@mui/material";
import { useState, forwardRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (e, reason) => {
        if (reason  === 'clickaway') return
        console.log(reason);
        setOpen(false)
    }

    const SnackbarAlert = forwardRef(
        function SnackbarAlert(props, ref){
            return <Alert ref={ref} {...props} />
        }
    )


    return (  
        <>  
            <Button onClick={()=> setOpen(true)}>submit</Button>
            {/* <Snackbar message='code ok' autoHideDuration={3000} open={open} onClose={handleClose} anchorOrigin={{
                vertical:'top',
                horizontal: 'right'
            }}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                        UNDO
                        </Button>
                        <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                        >
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>}
            ></Snackbar> */}
            <Snackbar autoHideDuration={3000} onClose={handleClose} open={open}>
                    <SnackbarAlert severity='success' onClose={handleClose}  >the form is submit roi</SnackbarAlert>
            </Snackbar>
        </>
     );
}
 
export default MuiSnackbar;