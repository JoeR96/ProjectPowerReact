import { React, useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Counter from "../Common/Counter";
import Button from "mui-button";
import { v4 as uuidv4 } from "uuid";
function A2SHypertrophySubmitForm(submitExercise, baseinfo) {
  console.log(baseinfo)
  console.log(submitExercise)
  const [auxiliaryLift, setAuxiliaryLift] = useState();
  const [trainingMax, setTrainingMax] = useState();
  // eslint-disable-next-line no-unused-vars
  const [sets, setSets] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitExercise.baseinfo)
    const data = {
      name: submitExercise.baseinfo.name,
      category: submitExercise.baseinfo.cat,
      AuxillaryLift: auxiliaryLift,
      TrainingMax: trainingMax,
      uniqueId: uuidv4(),
      template: submitExercise.baseinfo.temp,
      sets: sets,
    };
    console.log(data)
    var x = submitExercise.submitExercise;
    x.submitExercise(data);
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
        <Counter name={"Sets"} initialCount={0}></Counter>
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
