import React from "react"
    import ExerciseCard from '../Common/ExerciseCard'
    import axios from 'axios'
function A2SDailyLiftView() {

    const userinfo = {
        Username: localStorage.getItem('username'),
        Week: localStorage.getItem('week'),
        Day: localStorage.getItem('day')
    }

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        JSON.stringify(userinfo)
        axios.post("https://localhost:44317/A2SWorkout/DailyWorkout", userinfo)
            .then(function (response) {
                setData(response.data);
            })

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