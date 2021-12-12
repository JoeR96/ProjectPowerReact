import React, { useState, useEffect } from "react";
import CreateExerciseWithTemplate from "./CreateExerciseWithTemplate";
import A2SHypertrophySubmitForm from "./A2SHypertrophySubmitForm";
import A2SRepsThenSetsSubmitForm from "./A2SRepsThenSetsSubmitForm";
function ExerciseCreation(submitExercise) {
  const [activeTemplate, setActiveTemplate] = useState("");

  useEffect(() => {}, [activeTemplate]);
  if (activeTemplate === "") {
    return (
      <div>
        <CreateExerciseWithTemplate
          activeTemplate={setActiveTemplate}
        ></CreateExerciseWithTemplate>
      </div>
    );
  }
  if (activeTemplate === "A2SHypertrophy") {
    return (
      <div>
        <CreateExerciseWithTemplate
          activeTemplate={setActiveTemplate}
          Component={A2SHypertrophySubmitForm}
        ></CreateExerciseWithTemplate>
        <A2SHypertrophySubmitForm submitExercise={submitExercise} />
      </div>
    );
  }

  if (activeTemplate === "A2SRepsThenSets") {
    return (
      <div>
        <CreateExerciseWithTemplate
          activeTemplate={setActiveTemplate}
          Component={A2SRepsThenSetsSubmitForm}
        ></CreateExerciseWithTemplate>
        <A2SRepsThenSetsSubmitForm submitExercise={submitExercise} />
      </div>
    );
  }

  return <div></div>;
}
export default ExerciseCreation;
