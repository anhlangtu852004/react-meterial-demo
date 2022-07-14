import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography} from '@mui/material'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

 

const MuiTabs = () => {
   

    const [value,setValue] = useState(1)


    return ( 
        <Box sx={{width: '350px'}}>
            <Tabs value={value} onChange={(event,newValue)=>setValue(newValue)} textColor='secondary' indicatorColor='primary' 
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
            >
                <Tab label="item 1" value={1}/>
                <Tab label="item 2" value={2}/>
                <Tab label="item 3" value={3}/>
                <Tab label="item 4" value={4}/>
                <Tab label="item 5" value={5}/>
                <Tab label="item 6" value={6}/>
            </Tabs>
            <TabPanel value={value} index={1}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item 4
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item 5
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item 6
            </TabPanel>
        </Box>
     );
}
 
export default MuiTabs;