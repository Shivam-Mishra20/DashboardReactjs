
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Faq() {
    return (
        <div style={{ minWidth: "100%" }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Macbook Air
                </AccordionSummary>
                <AccordionDetails>
                    mackbook  air is a brand of Apple computer.this is most famous brand in the world of apple computers.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    IPhone 15
                </AccordionSummary>
                <AccordionDetails>
                    Apple products iphone 15 is the latest apple phone.most popular apple phone in the world.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Samsung S24 Ultra
                </AccordionSummary>
                <AccordionDetails>
                    Samsung products galaxy s24 ultra is the latest smartphone from samsung.most popular smartphone in the world.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    OnePlus 12
                </AccordionSummary>
                <AccordionDetails>
                    OnePlus products one plus 12 is the latest smartphone from one plus.most popular smartphone in the world.
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
