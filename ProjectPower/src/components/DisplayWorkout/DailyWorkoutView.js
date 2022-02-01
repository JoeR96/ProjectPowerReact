import React from "react"
import BaseWorkoutView from "./BaseWorkoutExerciseView"
import A2SHypertrophyTemplate from "./TemplateViews/A2SHypertrophyTemplate"
import A2SRepsThenSetsTemplate from "./TemplateViews/A2SRepsThenSetsTemplate"
import BaseWorkoutExerciseView from "./BaseWorkoutExerciseView"
import ExerciseAccordion from "../Common/AccordionOverride"
import SimpleAccordion from "../Common/Accordion"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
var udw = 'username=' + localStorage.getItem('username') + '&week=' + 1 + '&day=' + 1; 

export default () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch("https://projectpower.azurewebsites.net/WorkoutCreation/DailyWorkout?username=bzzt&week=1&day=1")
            .then((response) => response.json())
            .then((exercises) => setExercises(exercises));
    }, []);



    return (
        <div>
        {
            
            
                exercises.map((e, key) => (
                
                    <ExerciseAccordion key={key} item={e}>
                    </ExerciseAccordion>
            ))
        }
        </div>
    )}