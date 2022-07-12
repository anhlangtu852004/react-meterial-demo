import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MuiAccordion = () => {

    //neu khon gdung usetState thi cac Accordion se mo khi click, khong dong lai cai khong
    //click
    const [isExpanded, setIsExpanded ] = useState(false)
    const handleChange = (isExpanded,panel) => {
        setIsExpanded(isExpanded ? panel : false)
    }
    return ( 
        <>
            <Accordion expanded={isExpanded === 'panel-1'} onChange={(e,isExpanded) => handleChange(isExpanded,'panel-1')}>
                <AccordionSummary id="panel-1" expandIcon={<ExpandMoreIcon />}>
                    <Typography>this is text 1 sumerryl lone line</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc dolor, tincidunt a dolor et, posuere lobortis diam. Aenean ipsum odio, consectetur at molestie non, consequat sed purus. Pellentesque consectetur placerat facilisis. Maecenas dignissim tempus lacus, porttitor malesuada turpis rhoncus nec. Cras rhoncus pellentesque vulputate. Vivamus ac turpis quis lorem commodo commodo. Aenean eget urna a nisl tristique feugiat a ac est.</Typography>
                    
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={isExpanded === 'panel-2'} onChange={(e,isExpanded) => handleChange(isExpanded,'panel-2')}>
                <AccordionSummary id="panel-2" expandIcon={<ExpandMoreIcon />}>
                    <Typography>this is text 1 sumerryl lone line</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc dolor, tincidunt a dolor et, posuere lobortis diam. Aenean ipsum odio, consectetur at molestie non, consequat sed purus. Pellentesque consectetur placerat facilisis. Maecenas dignissim tempus lacus, porttitor malesuada turpis rhoncus nec. Cras rhoncus pellentesque vulputate. Vivamus ac turpis quis lorem commodo commodo. Aenean eget urna a nisl tristique feugiat a ac est.</Typography>
                    
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={isExpanded === 'panel-2'} onChange={(e,isExpanded) => handleChange(isExpanded,'panel-2')}>
                <AccordionSummary id="panel-2" expandIcon={<ExpandMoreIcon />}>
                    <Typography>this is text 1 sumerryl lone line</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc dolor, tincidunt a dolor et, posuere lobortis diam. Aenean ipsum odio, consectetur at molestie non, consequat sed purus. Pellentesque consectetur placerat facilisis. Maecenas dignissim tempus lacus, porttitor malesuada turpis rhoncus nec. Cras rhoncus pellentesque vulputate. Vivamus ac turpis quis lorem commodo commodo. Aenean eget urna a nisl tristique feugiat a ac est.</Typography>
                    
                </AccordionDetails>
            </Accordion>
        </>
     );
}
 
export default MuiAccordion;