import  { Stack, Avatar, AvatarGroup} from '@mui/material'

const MuiAvatar = () => {
    return ( 
        <Stack>
            <Stack direction='row' spacing={2} m={5}>
                <Avatar sx={{bgcolor:'primary.light'}} >MT</Avatar>
                <Avatar sx={{bgcolor:'secondary.main'}} >SQ</Avatar>
            </Stack>
            <Stack direction='row' spacing={2} m={5}>
                <AvatarGroup total={23}>
                    <Avatar sx={{bgcolor:'primary.light'}} >MT</Avatar>
                    <Avatar sx={{bgcolor:'secondary.main'}} >SQ</Avatar>
                    <Avatar src='https://toigingiuvedep.vn/wp-content/uploads/2022/04/avatar-gau-1.jpg'  alt='' />
                    <Avatar src='https://phunugioi.com/wp-content/uploads/2022/03/Avatar-Gau-sieu-cute-de-thuong.jpg'  alt='' />
                </AvatarGroup>
            </Stack>
            <Stack direction='row' spacing={2} m={5}>
                <Avatar variant = 'square' sx={{bgcolor:'primary.light'}} >MT</Avatar>
                <Avatar variant = 'rounded' sx={{bgcolor:'secondary.main'}} >SQ</Avatar>
            </Stack>
        </Stack>
    );
}
 
export default MuiAvatar;