import React, { useState, useRef } from "react";
import { Grid, Box } from "@material-ui/core";
import Reactdnd1 from "../Cards/Reactdnd1";
import ExerciseCreation from "../ScaffoldA2SExerciseForm/ExerciseCreation";
import { SubmitProvider } from "../ScaffoldA2SExerciseForm/SubmitContext";
import {DayAndLiftOrderProvider} from '../ScaffoldA2SExerciseForm/DayAndLiftOrderContext'
import axios from "axios";
import Button from "mui-button";
function DragList() {
  function UpdateState(value, uuid) {
    var x = cref.current.setFromOutside(value, uuid);
    console.log(x)
    //loop over workout columns object
    //loop through each column 
    //get the unique id,column id, column position
    console.log(uuid)

    var dayOrderUniqueId = []

    for (const [key, value] of Object.entries(x)) {

      for (let index = 0; index < value.items.length; index++) {
        if (value.items[index].uniqueId === uuid) {
          var w = value.items[index]
           dayOrderUniqueId = [key,index + 1,uuid];
          console.log(dayOrderUniqueId)
          console.log("LEBOOBIES")
        }

      }
    }
    var newObj = { ...value, uniqueId: uuid }

    setExercises([...exercises, value]);
    console.log(exercises)
  }
  function Submit(cols){
   
    var x = JSON.stringify({ "exerciseDaysAndOrders": exercises})
    console.log(x)

    axios.post('https://localhost:44317/WorkoutCreation/CreateWorkout', x, {
      headers: {
        // 'application/json' is the modern content-type for JSON, but some
        // older servers may use 'text/json'.
        // See: http://bit.ly/text-json
        'content-type': 'application/json'
      }
    })
  }

  const cref = useRef();
  const [exercises, setExercises] = useState([]);

  return (

    <div>
      <Grid container> 
        <Grid item md={2}>
          <Box pt={6.25} >
            <SubmitProvider value={UpdateState}>
              <DayAndLiftOrderProvider value={Submit}>
                <ExerciseCreation
                  toggleSidebar={1}
                  submitExercise={UpdateState}
                ></ExerciseCreation>
              </DayAndLiftOrderProvider>
              </SubmitProvider>
          </Box>
        </Grid>
        <Grid item md={8}>
          <Reactdnd1 ref={cref}></Reactdnd1>
        </Grid>
      </Grid>

    </div>

  );
}
export default DragList;
