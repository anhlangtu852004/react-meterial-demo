import { Link } from "@mui/material";

const MuiLinks = () => {
    return (
        <>
            <Link href='#' > google</Link>
            <Link href='#'  > underline</Link>
            <Link href='#' underline='hover' > hover </Link>
            <Link href='#' underline='none' variant='body1' color={'secondary '} > none </Link>
        </> 
    );
}
 
export default MuiLinks;