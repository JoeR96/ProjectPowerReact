
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from 'mui-button'
import TextField from '@mui/material/TextField';



function ExerciseCard(props,index) {
    return (
        <Card sx={{ minWidth: 125 }}>
            <CardContent style={{ backgroundColor: "grey" }}>
                <Typography sx={{ fontSize: 36 }} color="text.primary" gutterBottom>
                        {props.props.ExerciseName}            
                </Typography>
                <Typography variant="h5" component="div">
                        {props.props.WorkingWeight + ' KG' }
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {'Sets ' + props.props.Sets}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {'Amrap ' + props.props.AmrapTarget}
                </Typography>
                <Typography variant="body2">
                    <TextField id="standard-basic" label="AMRAP Result" variant="standard" />
                    <br />
                    <Box m={2} pt={3}>
                        <Button variant="contained" size="Large">
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












