import React, { Component, useEffect } from "react";
import { Grid,Container } from '@material-ui/core';
import Reactdnd1 from "../Cards/Reactdnd1";
import ScaffoldA2SExerciseForm from "../ScaffoldA2SExerciseForm/ScaffoldA2SExerciseForm";


function DragList() { 
  

  return (
   <Grid container>
    <Grid item xs={9} lg={9} md={9} sm={9} xl={9} >
      <Reactdnd1></Reactdnd1>
    </Grid>
    <Grid item xs={6} lg={3} md={3} sm={6} xl={3} >
      <ScaffoldA2SExerciseForm></ScaffoldA2SExerciseForm>
    </Grid>
   </Grid>
  );
 }
export default DragList;
