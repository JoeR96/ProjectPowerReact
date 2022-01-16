import { React, useEffect, useState, forwardRef, useContext } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from "@material-ui/core/styles";
import Button from 'mui-button';
import { Grid } from '@material-ui/core';
import { ExerciseProvider } from './ExerciseBaseContext'
import { act } from 'react-dom/test-utils';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
});



function CreateExerciseWithTemplate(Component) {
 
    console.log(Component)
    const classes = useStyles();
    const [exerciseName, setExerciseName] = useState('')
    const [template, setTemplate] = useState('A2SHypertrophy')
    const [category, setCategory] = useState('BIGDAVEARMS')

    const setNameAndCategory = (name, category) => {
        setExerciseName(name)
        setCategory(category)
    }


    
    useEffect(() => {
        Component.SetTemplate(template)
    }, [template]
    )

 return (
        
            <Grid container>
         <Grid  item md={4}>
             <Button fullWidth onClick={() => setNameAndCategory('Squat', 'Legs')}><h3>Squat</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Deadlift', 'Legs')}><h3>Deadlift</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Overhead Press', 'Legs')}><h3>Overhead Press</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Barbell Row', 'Legs')}><h3>Barbell Row</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Front Squat', 'Legs')}><h3>Front Squat</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Romanian Deadlift', 'Legs')}><h3>Romanian Deadlift</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Bench', 'Chest')}><h3>Bench</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Hack Squat', 'Legs')}><h3>Hack Squat</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Tricep Pushdown', 'BIGDAVEARMS')}><h3>Tricep Pushdown</h3></Button>

         </Grid>
         <Grid  item md={4}>
             <Button fullWidth onClick={() => setNameAndCategory('Cable Flies', 'Shoulders')}><h3>Cable Flies</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Shoulder Smith Press', 'Shoulders')}><h3>Smith OHP</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Lat Pulldown', 'Back')}><h3>Lat Pulldown</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Unilateral Pulldown', 'Back')}><h3>Unilateral Pulldown</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Low Row', 'Back')}><h3>Low Row'</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Leg Extension', 'Legs')}><h3>Leg Extension</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('Leg Curl', 'Legs')}><h3>Leg Curl</h3></Button>
             <Button fullWidth onClick={() => setNameAndCategory('DB Bicep Curl', 'BIGDAVEARMS')}><h3>DB Bicep Curl</h3></Button>


                </Grid>
         <Grid
             item
             md={4}
             style={{
                 paddingLeft: 36
             }}
         >
               

                    <label>Exercise Name:</label>
                    <br />
                    <input
                        name='exerciseName'
                        type='text'
                        value={exerciseName}
                        onChange={e => setExerciseName(e.target.value)}
                        classes={classes}
                        style={{
                            padding: 8,
                            backgroundColor: "lightgrey",
                            border: "4px solid orange"
                        }}
                    />
                    <br />
                    <Select
                        id="category"
                        label="category"
                        onChange={e => setCategory(e.target.value)}
                        defaultValue={'BIGDAVEARMS'}
                        classes={classes}
                        style={{
                            marginTop: 24,
                            marginBottom: 12
                        }}
                    >
                        <MenuItem id="category" value={'Legs'}>Legs</MenuItem>
                        <MenuItem id="category" value={'Back'}>Back</MenuItem>
                        <MenuItem id="category" value={'Shoulders'}>Shoulders</MenuItem>
                        <MenuItem id="category" value={'Chest'}>Chest</MenuItem>
                        <MenuItem id="category" value={'BIGDAVEARMS'}>BIGDAVEARMS</MenuItem>
                    </Select>
                    <br />
                    <Select
                        id="template"
                        label="template"
                        onChange={e => setTemplate(e.target.value)}
                        defaultValue={'A2SHypertrophy'}
                        classes={classes}
                        style={{
                            marginTop: 12,
                            marginBottom: 12
                        }}
                    >
                        <MenuItem id="category" value={'A2SHypertrophy'}>A2S Hypertrophy</MenuItem>
                        <MenuItem id="category" value={'A2SRepsThenSets'}>A2S Reps Then Sets</MenuItem>
                    </Select>
             <br />
             <ExerciseProvider value={{exerciseName,template,category} }>
                 <Component.Component  ></Component.Component>
             </ExerciseProvider>
                </Grid>
            </Grid>
        )
    }


export default forwardRef(CreateExerciseWithTemplate);
