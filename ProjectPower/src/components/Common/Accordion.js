import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function SimpleAccordion(item) {
  var x = { ...item.item };
  if (item === "undefined") {
    return <div></div>;
  }
  if (x.template === "A2SHypertrophy") {
    return (
      <div>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>{x.name}</h3>
              <br />
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
              {x.name}
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
