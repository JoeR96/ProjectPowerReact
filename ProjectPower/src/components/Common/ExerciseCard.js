
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from 'mui-button'
import axios from 'axios';

function Submit(amrapRepResult,exerciseid) {
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        } 
    };
    
    JSON.stringify(amrapRepResult)
    axios.put('https://projectpower.azurewebsites.net/A2SWorkout/'+exerciseid , {amrapRepResult:amrapRepResult}, config )
}

function ExerciseCard(props) {
    const [amrapRepResult, setAmrapCount] = React.useState(null);
    const [exerciseId, setExerciseId] = React.useState(null);

    return (
        <Card sx={{ minWidth: 125 }}>
            <CardContent style={{ backgroundColor: "grey" }}>
                <Typography sx={{ fontSize: 36 }}
                    color="text.primary" gutterBottom>
                        {props.props.exerciseName}            
                </Typography>
                <Typography variant="h5" component="div">
                        {props.props.workingWeight + ' KG' }
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {'Sets ' + props.props.sets}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {'Amrap ' + props.props.amrapTarget}
                </Typography>
                <Typography variant="body2">
                    <input value={amrapRepResult} onInput={e => setAmrapCount(e.target.value)} />
                    
                    <br />
                    <Box m={2} pt={3}>
                        <Button onClick={() => {
                            Submit(amrapRepResult,props.props.id)
                        }} variant="contained" size="Large">
                            Submit
                        </Button>
                    </Box>
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
        </Card>
    );
}



export default ExerciseCard












