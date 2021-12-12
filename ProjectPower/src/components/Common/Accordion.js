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

  })
);

export default function SimpleAccordion(item) {
  const classes = useStyles();
  var x = { ...item.item };
  if (item === "undefined") {
    return <div></div>;
  }
  if (x.template === "A2SHypertrophy") {
    return (
      <div>
        <Accordion classes={{ root: classes.accordionRoot }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography style={{ wordWrap: 'break-word' }}>
              <h3>{x.exerciseName}</h3>
              {x.template}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {x.category}
              <br />
              {"Sets " + x.sets}
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
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>{x.name}</h3>
              {x.template}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {x.category}
              <br />
              {"Sets " + x.sets}
              <br />
              {"Starting Reps " + x.reps}
              <br />
              {"Rep increase" + x.repIncrease}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
