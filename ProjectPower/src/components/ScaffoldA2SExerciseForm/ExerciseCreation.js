import React, { useState, useEffect } from "react";
import CreateExerciseWithTemplate from "../ScaffoldA2SExerciseForm/CreateExerciseWithTemplate";
import A2SHypertrophySubmitForm from "./A2SHypertrophySubmitForm";
import A2SRepsThenSetsSubmitFrom from "./A2SRepsThenSetsSubmitForm";

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
        ></CreateExerciseWithTemplate>
        <A2SRepsThenSetsSubmitFrom submitExercise={submitExercise} />
      </div>
    );
  }

  return <div></div>;
}
export default ExerciseCreation;
