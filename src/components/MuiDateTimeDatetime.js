import { useState } from 'react';

import { Stack,TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { 
    LocalizationProvider,DatePicker, TimePicker,DateTimePicker,
    CalendarPicker,
    MonthPicker,
    YearPicker 
} from '@mui/x-date-pickers'

const MuiDateTimeDatetime = () => {
    const [value, setValue] = useState(new Date())
    return ( 
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={2} width='320px' m={3}>
                    <DatePicker
                        label='chon Ngay'
                        value={value}
                        views={['year', 'month', 'day']}
                        onChange={(newValue)=>{setValue(newValue)}}
                        renderInput={(params) => {
                           return <TextField {...params} helperText='chon dung format ngay' />
                        }}
                    />
                    <TimePicker
                        label='chon gio'
                        value={value}
                        onChange={(newValue)=>{setValue(newValue)}}
                        renderInput={(params) => {
                           return <TextField {...params} helperText='chon dung format gio' />
                        }}
                    />
                    <DateTimePicker
                        label='chon gio'
                        value={value}
                        onChange={(newValue)=>{setValue(newValue)}}
                        renderInput={(params) => {
                           return <TextField {...params} helperText='chon dung format gio' />
                        }}
                    />
                    <CalendarPicker
                        date={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </Stack>
            </LocalizationProvider>
        </>
     );
}
 
export default MuiDateTimeDatetime;