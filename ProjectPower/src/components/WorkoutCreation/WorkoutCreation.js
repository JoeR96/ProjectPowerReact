import React, { Component, useState,useEffect,useRef } from "react";
import { Grid,Container } from '@material-ui/core';
import Reactdnd1 from "../Cards/Reactdnd1";
import ScaffoldA2SExerciseForm from "../ScaffoldA2SExerciseForm/ScaffoldA2SExerciseForm";
import CreateExerciseWithTemplate from "../ScaffoldA2SExerciseForm/CreateExerciseWithTemplate";

function DragList() { 
  
  function UpdateState(value){
    setExercises([...exercises,value])  
    cref.current.setFromOutside(value)
  }
  const cref = useRef()
  const childFunc = React.useRef(null)
  const [exercises, setExercises] = useState([]);
  

 
    
  return (
   <Grid container>
    <Grid item md={12} >
      <Reactdnd1  ref={cref} exercises = {exercises}></Reactdnd1>
    </Grid>
      <Grid item xs={6} lg={3} md={3} sm={6} xl={3} >
        <ScaffoldA2SExerciseForm handler = {UpdateState}></ScaffoldA2SExerciseForm >
      </Grid>
      <Grid item xs={6} lg={3} md={3} sm={6} xl={3} >
        <CreateExerciseWithTemplate ></CreateExerciseWithTemplate >
      </Grid>
   </Grid>
  );
  }
export default DragList;
