import { Typography } from "@mui/material";

const MuiTypography = () => {
    return ( 
        <div>
            <Typography variant = 'h1'>h1 heading</Typography>
            <Typography variant = 'h2'>h2 heading</Typography>
            <Typography variant = 'h3'>h3 heading</Typography>
            <Typography variant = 'h4'>h4 heading</Typography>
            <Typography variant = 'h5'>h5 heading</Typography>
            <Typography variant = 'h6'>h6 heading</Typography>
            <hr></hr>
            
            <Typography variant = 'body1' component='h1' gutterBottom>body1</Typography>
            <Typography variant= 'body2'> body2 </Typography> 
              <hr></hr>
              <Typography variant = 'button'>button</Typography>
            <Typography variant= 'caption'> caption </Typography> 
            <hr></hr>
              <Typography variant = 'inherit'>inherit</Typography>
            <Typography variant= 'overline'> overline </Typography> 
            <Typography variant = 'subtitle1'>subtitle1</Typography>
            <Typography variant= 'subtitle2'> subtitle2 </Typography> 
            <Typography variant = 'string'>string</Typography>
            {/* <Typography variant= 'caption'> caption </Typography>  */}
        </div>

     );
}
 
export default MuiTypography;