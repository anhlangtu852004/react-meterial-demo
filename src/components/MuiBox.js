import {Box, Stack, Divider, Grid, Paper} from '@mui/material'

const MuiBox = () => {
    return ( 
        <Paper sx ={{padding: '32px'}} elevation={4}>
            <Stack 
                sx={{
                    border: '1px solid '

                    }} 
                spacing={2}
                divider={<Divider orientation='horizontal'  flexItem/>}
            >
                <Box sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    width: '100px',
                    height: '100px',
                    '&:hover': {
                        backgroundColor: 'primary.light',

                }
            }}>
                        test
                </Box> 
                <Box sx={{
                    backgroundColor: 'red',
                    color: 'white',
                    width: 100,
                    height: 100,
                    p: 2,
                    '&:hover':{
                        backgroundColor: 'green'
                    }
                }}>
                    test 2
                </Box>
            </Stack>
            <Grid container my={2} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={7} >
                    <Box bgcolor='primary.main' p={3}> menu1 </Box>
                </Grid>
                <Grid item xs >
                    <Box bgcolor='primary.main' p={3}> menu2 </Box>
                </Grid>
                <Grid item xs >
                    <Box bgcolor='primary.main' p={3}> menu3 </Box>
                </Grid>
                <Grid item xs >
                    <Box bgcolor='primary.main' p={3}> menu4 </Box>
                </Grid>
            </Grid>
        </Paper>

    );
}
 
export default MuiBox;