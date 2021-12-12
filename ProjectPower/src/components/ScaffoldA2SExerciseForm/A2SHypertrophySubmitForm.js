import { React, useState, useContext } from "react";
import ExerciseContext from './ExerciseBaseContext'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Counter from "../Common/Counter";
import Button from "mui-button";
import { v4 as uuidv4, v4 } from "uuid";
import SubmitContext from "./SubmitContext";

function A2SHypertrophySubmitForm(submitExercise) {

  const baseInformation = useContext(ExerciseContext)
  const [auxiliaryLift, setAuxiliaryLift] = useState(true);
  const [trainingMax, setTrainingMax] = useState(69);
  const [sets, setSets] = useState();
  const submit = useContext(SubmitContext)

  const setTheStateOfTheSets = (counter) => {
    setSets(counter)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Username: localStorage.getItem('username'),
      exerciseName: baseInformation.exerciseName,
      category: baseInformation.category,
      auxillaryLift: auxiliaryLift,
      trainingMax: trainingMax,
      template: baseInformation.template,
      sets: sets,
      liftDay: 1,
      liftOrder: 1,
      roundingValue: 2.5

    };
    submit(data, uuidv4())
  };

 


  return (
    <div>
      <div
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Select
          id="auxiliaryLift"
          label="auxiliaryLift"
          onChange={(e) => setAuxiliaryLift(e.target.value)}
          defaultValue={true}
        >
          <br />

          <MenuItem id="auxiliaryLift" value={true}>
            Yes
          </MenuItem>
          <br />

          <MenuItem id="auxiliaryLift" value={false}>
            No
          </MenuItem>
        </Select>
      </div>
      <div
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <label>TrainingMax</label>
        <br />
        <input
          name="trainingMax"
          type="number"
          value={trainingMax}
          onChange={(e) => setTrainingMax(e.target.value)}
        />
      </div>
      <div
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Counter name={"Sets"} setState={setTheStateOfTheSets} initialCount={0}></Counter>
      </div>
      <div
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          className="form__custom-button"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default A2SHypertrophySubmitForm;
