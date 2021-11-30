import React, { useState, useEffect } from "react";
import CreateExerciseWithTemplate from "../ScaffoldA2SExerciseForm/CreateExerciseWithTemplate";
import A2SHypertrophySubmitForm from "./A2SHypertrophySubmitForm";
import A2SRepsThenSetsSubmitFrom from "./A2SRepsThenSetsSubmitForm";

function ExerciseCreation(submitExercise) {
  const [activeTemplate, setActiveTemplate] = useState({
    name: "",
    cat: "",
    temp: "A2SHypertrophy",
  });

  useEffect(() => {
    console.log(activeTemplate);
  }, [activeTemplate]);
  if (activeTemplate.temp === "") {
    return (
      <div>
        <CreateExerciseWithTemplate
          activeTemplate={setActiveTemplate}
        ></CreateExerciseWithTemplate>
      </div>
    );
  }
  if (activeTemplate.temp === "A2SHypertrophy") {
    return (
      <div>
        <CreateExerciseWithTemplate
          activeTemplate={setActiveTemplate}
        ></CreateExerciseWithTemplate>
        <A2SHypertrophySubmitForm
          baseinfo={activeTemplate}
          submitExercise={submitExercise}
        />
      </div>
    );
  }

  if (activeTemplate.temp === "A2SRepsThenSets") {
    return (
      <div>
        <CreateExerciseWithTemplate
          activeTemplate={setActiveTemplate}
        ></CreateExerciseWithTemplate>
        <A2SRepsThenSetsSubmitFrom
          baseinfo={activeTemplate}
          submitExercise={submitExercise}
        />
      </div>
    );
  }

  return <div></div>;
}
export default ExerciseCreation;
