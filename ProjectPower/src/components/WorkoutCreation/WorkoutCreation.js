import React, { useState, useRef, useContext } from "react";
import { Grid, Box } from "@material-ui/core";
import Reactdnd1 from "../Cards/Reactdnd1";
import ExerciseCreation from "../ScaffoldA2SExerciseForm/ExerciseCreation";
export const ExerciseContext = React.createContext();

function DragList() {
  function UpdateState(value) {
    setExercises([...exercises, value]);
    cref.current.setFromOutside(value);
  }

  const [newExercise, SetNewExercise] = useState({
    name: '',
    category: '',
  })

  function updateName(name) {
  }
  const cref = useRef();
  const [exercises, setExercises] = useState([]);

  return (

    <div>
      <Grid container>
        <Grid item md={2}>
          <Box pt={6.25} >
            <ExerciseCreation
              sendName={updateName}
              submitExercise={UpdateState}
            ></ExerciseCreation>
          </Box>
        </Grid>
        <Grid item md={10}>
          <Reactdnd1 ref={cref}></Reactdnd1>
        </Grid>
      </Grid>
    </div>

  );
}
export default DragList;
