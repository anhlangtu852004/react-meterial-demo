import { Box, Card , CardContent, CardActions,CardMedia, Typography, Button, CardActionArea,CardHeader, Grid,IconButton,Avatar} from '@mui/material'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const MuiCard = () => {
    return ( 

        <Grid container spacing={2}>
            <Grid item>
                <Box width='320px' >
                    <Card>
                        <CardMedia 
                            component='img'
                            height='250px'
                            src='https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
                            alt='imag g uplash'
                        />

                        
                        <CardContent>
                            <Typography variant= 'h5' gutterBottom >React</Typography>
                            <Typography variant= 'body1' >
                                this is noi dung Reactmm chung ta se hanh dong vi no 
                                chia se di day la dldy do ovi dso, bat tu da lat lam dongn
                                noi o cua nhieu nuoi
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                            <Button variant='contained' >Share</Button>
                        </CardActions>
                    </Card>
                
                </Box>
            </Grid>
            <Grid item>
                <Box width='320px' >
                    
                    <Card>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                height='250px'
                                src='https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg'
                                alt='imag g uplash'
                            />

                       
                            <CardContent>
                                <Typography variant= 'h5' gutterBottom >React</Typography>
                                <Typography variant= 'body1' >
                                    this is noi dung Reactmm chung ta se hanh dong vi no 
                                    chia se di day la dldy do ovi dso, bat tu da lat lam dongn
                                    noi o cua nhieu nuoi
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Learn more</Button>
                            <Button variant='contained' >Share</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item>
                <Box width='320px' >
                    
                    <Card>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertOutlinedIcon />
                        </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                height='250px'
                                src='https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg'
                                alt='imag g uplash'
                            />

                       
                            <CardContent>
                                <Typography variant= 'h5' gutterBottom >React</Typography>
                                <Typography variant= 'body1' >
                                    this is noi dung Reactmm chung ta se hanh dong vi no 
                                    chia se di day la dldy do ovi dso, bat tu da lat lam dongn
                                    noi o cua nhieu nuoi
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Learn more</Button>
                            <Button variant='contained' >Share</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
     );
}
 
export default MuiCard;