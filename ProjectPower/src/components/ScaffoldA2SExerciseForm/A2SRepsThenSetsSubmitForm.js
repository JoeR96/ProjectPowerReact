import { React, useContext, useState } from "react";
import Counter from "../Common/Counter";
import Button from "mui-button";
import { v4 as uuidv4 } from "uuid";
import ExerciseContext from './ExerciseBaseContext'
import SubmitContext from "./SubmitContext";

function A2SRepsThenSetsSubmitForm(submitExercise) {

  const [reps, setReps] = useState(8);
  const [repIncrease, setRepIncrease] = useState(2);
  const [sets, setSets] = useState(3);
  const [startWeight, setStartWeight] = useState(0);
  const [setTarget, setSetTarget] = useState(3);
  const [repTarget, setRepTarget] = useState(3);
  const baseInformation = useContext(ExerciseContext)
  const submit = useContext(SubmitContext)

  const setStartingSets = (counter) => {
    setSets(counter)
  }
  const setSetRepIncreasePerSet = (counter) => {
    setRepIncrease(counter)
  }
  const setStartingReps = (counter) => {
    setReps(counter)
  }

  const setStartingWeight = (startingWeight) => {
    setStartWeight(startingWeight)
  }

  const setTargetSets = (targetSets) => {
    setSetTarget(targetSets)
  }

  const setTargetReps = (targetReps) => {
    setRepTarget(targetReps)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      exerciseName: baseInformation.exerciseName,
      username: localStorage.getItem('username'),
      category: baseInformation.category,
      template: baseInformation.template,
      liftDay: 0,
      liftOrder: 0,
      startingReps: reps,
      startingSets: reps,
      repIncreasePerSet: repIncrease,
      goalSets: setTarget,
      goalReps: repTarget,
      startingWeight: startWeight
    };
    ; submit(data, uuidv4())
  };

  return (
    <div>
      <label>Starting Weight</label>
      <br />
      <input
        name="startingWeight"
        type="number"
        onChange={(e) => setStartingWeight(e.target.value)}
      />
      <Counter
          style={{
            paddingTop: 12,
            paddingBottom: 12,
          }} name={"Sets"}
          initialCount={sets}
          setState={setStartingSets}
          >
          </Counter>
        <Counter
          style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
          name={"Starting Reps"}
          initialCount={reps}
          setState={setStartingReps}
          
        > 
        </Counter>
      <Counter
          style={{
            paddingTop: 12,
            paddingBottom: 12,
          }}
          name={"Rep Increase Per Set"}
          initialCount={repIncrease}
          setState={setSetRepIncreasePerSet}       
      ></Counter>
      <Counter
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
        name={"Set Target"}
        initialCount={repIncrease}
        setState={setTargetSets}
      ></Counter>
      <Counter
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
        name={"Rep Target"}
        initialCount={repIncrease}
        setState={setTargetReps}
      ></Counter>
        <Button
          style={{
            paddingTop: 12,
            paddingBottom: 12,
          }}
          onClick={handleSubmit}
          type="submit"
          color="primary"
          className="form__custom-button"
        >
          Submit
        </Button>
    </div>
  );
}

export default A2SRepsThenSetsSubmitForm;
