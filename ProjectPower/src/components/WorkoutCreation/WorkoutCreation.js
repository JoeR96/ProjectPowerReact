import React, { useState, useRef } from "react";
import { Grid, Box } from "@material-ui/core";
import Reactdnd1 from "../Cards/Reactdnd1";
import ExerciseCreation from "../ScaffoldA2SExerciseForm/ExerciseCreation";
import { SubmitProvider } from "../ScaffoldA2SExerciseForm/SubmitContext";
import {DayAndLiftOrderProvider} from '../ScaffoldA2SExerciseForm/DayAndLiftOrderContext'
import axios from "axios";
import Button from "mui-button";
import { UpdateLiftDayAndOrderProvider } from "../ScaffoldA2SExerciseForm/UpdateDayAndLiftOrderContext";

function DragList() {
  function UpdateState(value, uuid) {
    var x = cref.current.setFromOutside(value, uuid);

    var dayOrderUniqueId = []

    for (const [key, value] of Object.entries(x)) {

      for (let index = 0; index < value.items.length; index++) {
        if (value.items[index].uniqueId === uuid) {
          var w = value.items[index]
           dayOrderUniqueId = [key,index + 1,uuid];
        }

      }
    }
    var newObj = { ...value, uniqueId: uuid }

    setExercises([...exercises, newObj]);
    console.log(exercises)
  }

    const sortDays = (cols) => {
      for (const [key, value] of Object.entries(cols)) {
        for (let index = 0; index < value.items.length; index++) {

            var w = value.items[index]
            w.liftDay = key;
          w.liftOrder = index;
          var x = exercises.find(({ uniqueId }) => uniqueId === w.uniqueId);
          x.liftDay = w.liftDay;
          x.liftOrder = w.liftOrder;
        }
      }
      exercises.find((e) => {

      })
    }
  
  function Submit(){
 
    var x = JSON.stringify({ "exerciseDaysAndOrders": exercises})
    console.log(x)

    axios.post('https://projectpower.azurewebsites.net/WorkoutCreation/CreateWorkout', x, {
      headers: {
        // 'application/json' is the modern content-type for JSON, but some
        // older servers may use 'text/json'.
        // See: http://bit.ly/text-json
        'content-type': 'application/js   on'
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
          <UpdateLiftDayAndOrderProvider value={sortDays}>
            <Reactdnd1 ref={cref}></Reactdnd1>
            <Button onClick={Submit}></Button>
        / </UpdateLiftDayAndOrderProvider> 
        </Grid>
      </Grid>

    </div>

  );
}
export default DragList;
