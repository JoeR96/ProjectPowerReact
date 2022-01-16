import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        panelSummary: {

        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular
        },
        innerMenuItem: {
            paddingLeft: "32px"
        },
        expanded: {
            padding: "0px"
        },
        content: {
            justifyContent: "center"
        }
    })
);

export default function SimpleAccordion(item) {
    const classes = useStyles();
    var x = { ...item.item };
    if (item === "undefined") {
        return <div></div>;
    }
    console.log(item.item)
    if (item.item.Template === "A2SHypertrophy") {
        return (
            <div>
                <Accordion classes={{ root: classes.accordionRoot }}>
                    <AccordionSummary classes={{ content: classes.content}} aria-controls="panel1a-content" id="panel1a-header" sx={{ justifyContent: "center"}}>
                        <Typography>
                            <h3 >{x.Name}</h3>
                            {x.Template}
                            <br />
                          
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{
                            textAlign: "center"
                        }}>
                            {"Category: " + x.Category}
                            <br />
                            {"Sets " + x.Sets}
                            <br />
                            {"Reps per set " + x.RepsPerSet}
                            <br />
                            {"Amrap Target " + x.AmrapRepTarget}
                            <br />
                            {x.TrainingMax + " KG"}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    } else {
        return (
            <div>
                <Accordion>
                    {
                    }
                    <AccordionSummary classes={{ content: classes.content }} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography sx={{
                            textAlign: "center"
                        }}>
                            <h3>{x.Name}</h3>
                            {x.Template}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {x.category}
                            <br />
                            {"Sets " + x.StartingSets}
                            <br />
                            {"Starting Reps " + x.StartingReps}
                            <br />
                            {"Rep increase" + x.RepIncreasePerSet}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

