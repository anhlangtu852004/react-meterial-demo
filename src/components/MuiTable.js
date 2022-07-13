import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material'

  

const MuiTable = () => {
    return ( 
        <TableContainer component={Paper} >
            <Table size='small' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>first_name</TableCell>
                        <TableCell>last_name</TableCell>
                        <TableCell>email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>ten 1</TableCell>
                        <TableCell>last 1</TableCell>
                        <TableCell>email 1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>ten 2</TableCell>
                        <TableCell>last 2</TableCell>
                        <TableCell>email 2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>ten 3</TableCell>
                        <TableCell>last 3</TableCell>
                        <TableCell>email 3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>ten 4</TableCell>
                        <TableCell>last 4</TableCell>
                        <TableCell>email 4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>ten 5</TableCell>
                        <TableCell>last 5</TableCell>
                        <TableCell>email 5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell rowSpan={3}/>
                        <TableCell colSpan={2}>sub</TableCell>
                        <TableCell >20</TableCell>
                    </TableRow>
                    <TableRow>
                    
                        <TableCell align='center' >sub</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >20</TableCell>
                    </TableRow>
                    <TableRow>
                    
                        <TableCell align='center' >sub</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >20</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
     );
}
 



export default MuiTable;