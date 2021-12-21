import * as React from 'react'
import { Accordion } from '@mui/material';
import {AccordionSummary} from '@material-ui/core'
import {Typography} from '@material-ui/core'

export default function ExerciseAccordion(props){
    return (
        <div>
            <Accordion classes={{ root: classes.accordionRoot }}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Typography style={{ wordWrap: 'break-word' }}>
                        <h3>{props.exerciseName}</h3>
                        {props.template}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}