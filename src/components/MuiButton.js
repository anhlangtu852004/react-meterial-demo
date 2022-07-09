import { Button, Stack } from '@mui/material'

const Muibutton = () => {
    return ( 
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com.vn'>text</Button>
            <Button variant='contained' >contained</Button>
            <Button variant='outlined' >outlined</Button>
            <Button variant='string' >string    </Button>
        </Stack>
     );
}
 
export default Muibutton;