import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const MuiBreadcrumb = () => {
    return ( 
        <Box mt={9}>
             <Breadcrumbs separator={<NavigateNextIcon />} maxItems={2}
                // itemsAfterCollapse={2}
                itemsBeforeCollapse={3}
             >
                <Link href="#" underline="hover">home</Link>
                <Link href="#" underline="hover">abount</Link>
                <Link href="#" underline="hover">sproduct</Link>
                <Link href="#" underline="hover">sproduct</Link>
                <Typography>contact</Typography>
            </Breadcrumbs>
           
        </Box>
     );
}
 
export default MuiBreadcrumb;