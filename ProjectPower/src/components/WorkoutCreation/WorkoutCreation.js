import React, { Component, useState,useEffect } from "react";
import { Grid,Container } from '@material-ui/core';
import Reactdnd1 from "../Cards/Reactdnd1";
import ScaffoldA2SExerciseForm from "../ScaffoldA2SExerciseForm/ScaffoldA2SExerciseForm";
import Button from '../Common/Button'
import axios from "axios";

function DragList() { 
  
  function UpdateState(value){

    setExercises([...exercises,value])  
  }
  
  const childFunc = React.useRef(null)
  const [exercises, setExercises] = useState([]);
  

 
    
  return (
   <Grid container>
    <Grid item md={12} >
      <Reactdnd1  childFunc={childFunc} exercises = {exercises}></Reactdnd1>
    </Grid>
    <Grid item xs={6} lg={3} md={3} sm={6} xl={3} >
      <Button></Button>
      <ScaffoldA2SExerciseForm handler = {UpdateState}></ScaffoldA2SExerciseForm >
      
    </Grid>
   </Grid>
  );
  }
export default DragList;
