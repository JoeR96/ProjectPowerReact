import React from "react";
import Button from "mui-button";
import axios from "axios";


export default (props) => {

    function submit() {
        let data = {
            id: props.props.ExerciseMasterId,
            reps: repCount,
            week: props.props.Week,
            sets: setCount
        }
        console.log(data)
        axios.put("https://projectpower.azurewebsites.net/WorkoutCreation/UpdateWorkOutResult/", data)
    }

    const [repCount, setRepCount] = React.useState(0);
    const [setCount, setSetCount] = React.useState(0);
    return (
        <div
            style={{
                paddingTop: 12,
                paddingBottom: 12,
            }}
        >
            <label>Reps</label>
            <br />
            <input
                name="repCount"
                type="number"
                value={repCount}
                onChange={(e) => setRepCount(e.target.value)}
            />
            <br />
            <label>Sets</label>
            <br />
            <input
                name="setCount"
                type="number"
                value={setCount}
                onChange={(e) => setSetCount(e.target.value)}
            />
            <br/>
            <Button onClick={submit}>Submit</Button>
        </div>
        
    )
}