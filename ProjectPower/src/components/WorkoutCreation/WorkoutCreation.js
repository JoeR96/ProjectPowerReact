import React, { useState, useRef, useContext } from "react";
import { Grid, Box } from "@material-ui/core";
import Reactdnd1 from "../Cards/Reactdnd1";
import ExerciseCreation from "../ScaffoldA2SExerciseForm/ExerciseCreation";
import { createContext } from 'react';

function DragList() {
  function UpdateState(value) {
    console.log(value);
    setExercises([...exercises, value]);
    cref.current.setFromOutside(value);
  }

  function updateName(name) {
    console.log(name);
  }
  const Context = createContext({});
  const cref = useRef();
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({});

  return (
    <Context.Provider value={exercises}>

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
    </Context.Provider >

  );
}
export default DragList;
