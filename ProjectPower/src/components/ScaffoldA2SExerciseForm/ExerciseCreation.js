import React, { useState, useEffect } from "react";
import CreateExerciseWithTemplate from "../ScaffoldA2SExerciseForm/CreateExerciseWithTemplate";
import A2SHypertrophySubmitForm from "./A2SHypertrophySubmitForm";
import A2SRepsThenSetsSubmitForm from "./A2SRepsThenSetsSubmitForm";
import { ExerciseProvider } from "./ExerciseBaseContext";

function ExerciseCreation(submitExercise) {
  const [activeTemplate, setActiveTemplate] = useState('A2SHypertrophy');

  useEffect(() => {
    console.log(activeTemplate)
  }, [activeTemplate]);

  if (activeTemplate === "A2SHypertrophy") {
    return (
      <div>
        <ExerciseProvider value={activeTemplate}>
          <CreateExerciseWithTemplate
            Component={A2SHypertrophySubmitForm}
            SetTemplate={setActiveTemplate}
          >(</CreateExerciseWithTemplate>
        </ExerciseProvider>
      </div>
    );
  }
  if (activeTemplate === "A2SRepsThenSets") {
    return (
      <div>
        <ExerciseProvider value={activeTemplate}>
        <CreateExerciseWithTemplate
            Component={A2SRepsThenSetsSubmitForm}
            SetTemplate={setActiveTemplate}
        ></CreateExerciseWithTemplate>
        </ExerciseProvider>
      </div>
    );
  }

}
export default ExerciseCreation;
