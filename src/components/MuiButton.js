import { Button, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
// import { styled } from '@mui/material/styles';



const Muibutton = () => {



    return ( 
        <div>
        <Stack spacing={2} direction='row'>
            <Button variant='text' >text</Button>
            <Button variant='contained' >contained</Button>
            <Button variant='outlined' >outlined</Button>
            <Button variant='string' >string    </Button>
        </Stack>
        <Stack spacing= {1} >
            <Button variant='contained' color="primary" > primary</Button>
            <Button variant='contained' color="secondary" > secondary </Button>
            <Button variant='contained' color="error" > erro </Button>
            <Button variant='contained' color="warning" > warning </Button>
            <Button variant='contained' color="info" > info </Button>
            <Button variant='contained' color="success" > success </Button>
       </Stack>
       <Stack spacing={4}>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
       </Stack>
        <label htmlFor="contained-button-file">
            
            <Button variant="contained" component="span" disableRipple onClick={() => alert('clicked')}>
                {/* <input accept="image/*" id="contained-button-file" multiple type="file" style={{display: 'none'}} /> */}
                Upload
            </Button>
        </label>
        <Button variant='contained' color='secondary' startIcon={<DeleteIcon />} color="success" 
            disableElevation
        >
            delete
        </Button>
        <Button variant ='contained' endIcon={<SendIcon />} color="secondary"  >
            sendicin
        </Button>
        <IconButton aria-label='delete'>
            <DeleteIcon />
        </IconButton>
    </div>
     );
}
 
export default Muibutton;