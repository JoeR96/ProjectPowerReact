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
  const [isLoading,setIsLoading] = useState(false)
   useEffect(() => {
      setIsLoading(false)
    }, []);
    // useEffect(() => {
        
    //         async function GetData(){
    //             var username = localStorage.getItem("username").toString()
    //             var x = await axios.get('https://localhost:44317/A2SWorkout/UnassignedExercises?Term='+username)          
    //             return x  
    //             };

    //         const fetchData = async () => {
    //         const res = await GetData(); 
    //         //setExercises(res.data)
    //         setIsLoading(false)
    //                  }
    //         fetchData();
            
            
    // }, []);
 if(isLoading)
    {
    return (
        <div>
            hello
        </div>
    );
    }
    if(!isLoading)
    {
  return (
   <Grid container>
    <Grid item xs={9} lg={9} md={9} sm={9} xl={9} >
      <Reactdnd1  childFunc={childFunc} exercises = {exercises}></Reactdnd1>
    </Grid>
    <Grid item xs={6} lg={3} md={3} sm={6} xl={3} >
      <ScaffoldA2SExerciseForm handler = {UpdateState}></ScaffoldA2SExerciseForm >
      
    </Grid>
   </Grid>
  );
 }}
export default DragList;
