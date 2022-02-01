import React from "react";
import Button from "mui-button";
import axios from "axios";

export default (props) => {
    
    function submit() {
        let data = {
            id: props.props.ExerciseMasterId,
            reps: amrapResult,
            week: props.props.Week
        }
        axios.put("https://projectpower.azurewebsites.net/WorkoutCreation/UpdateWorkOutResult/", data)
    }

    const [amrapResult, setAmrapCount] = React.useState(0);
    return (
        <div
            style={{
                paddingTop: 12,
                paddingBottom: 12,
            }}
        >
            <label>Amrap Result</label>
            <br />
            <input
                name="amrapResult"
                type="number"
                value={amrapResult}
                onChange={(e) => setAmrapCount(e.target.value)}
            />
            <br/>
            <Button onClick={submit}>Submit</Button>
        </div>   
    )
}