import React from 'react'
import ExerciseCard from '../Common/ExerciseCard'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

function A2SDailyLiftView() {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://192.168.8.102:1337/api/getExerciseView")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (       
        <div>          
            {data.map((e, key) => (            
                <ExerciseCard key={key} props={e} index={key}>
                </ExerciseCard> 
            ))}
            
        </div>
    );
}

export default A2SDailyLiftView