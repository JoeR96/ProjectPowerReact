import React from "react"
import BaseWorkoutView from "./BaseWorkoutExerciseView"
import A2SHypertrophyTemplate from "./TemplateViews/A2SHypertrophyTemplate"
import A2SRepsThenSetsTemplate from "./TemplateViews/A2SRepsThenSetsTemplate"
import BaseWorkoutExerciseView from "./BaseWorkoutExerciseView"
import ExerciseAccordion from "../Common/AccordionOverride"

const fetchDailyWorkout = () => {
    return [['Squat', 'Legs', 'A2SHypertrophy',8],
        ['Deadlift', 'Back', 'A2SRepsThenSets',5],
        'Bench', 'Chest','A2SRepsThenSets',12]
}

export default () => {
    fetchDailyWorkout.map((exercise) => {
        <ExerciseAccordion props={exercise}></ExerciseAccordion>
    })
}