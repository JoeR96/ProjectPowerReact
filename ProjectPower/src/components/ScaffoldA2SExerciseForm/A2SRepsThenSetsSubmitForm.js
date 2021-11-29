import { React, useState } from "react";
import Counter from "../Common/Counter";
import Button from "mui-button";
import { v4 as uuidv4 } from "uuid";

function A2SRepsThenSetsSubmitForm(submitExercise, baseinfo) {
  // eslint-disable-next-line no-unused-vars
  const [reps, setReps] = useState(8);
  // eslint-disable-next-line no-unused-vars
  const [repIncrease, setRepIncrease] = useState(2);
  // eslint-disable-next-line no-unused-vars
  const [sets, setSets] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: submitExercise.baseinfo.name,
      category: submitExercise.baseinfo.cat,
      template: submitExercise.baseinfo.temp,
      reps: reps,
      repIncrease: repIncrease,
      uniqueId: uuidv4(),
      sets: sets,
    };
    console.log(data);
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
        <Counter name={"Sets"} initialCount={sets}></Counter>
      </div>
      <div
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Counter name={"Starting Reps"} initialCount={reps}></Counter>
      </div>
      <div
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Counter
          name={"Rep Increase Per Set"}
          initialCount={repIncrease}
        ></Counter>
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

export default A2SRepsThenSetsSubmitForm;
