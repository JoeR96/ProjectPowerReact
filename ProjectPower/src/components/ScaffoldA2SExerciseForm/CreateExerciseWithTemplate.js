import {React,useEffect,useState,useImperativeHandle,ref,forwardRef} from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      // component default is "inline-flex", using "flex" makes the
      // label + control group use the entire width of the parent element
      display: "flex",
      // component default is "flex-start", using "space-between" pushes
      // both flexed content to the right and left edges of the flexbox
      // Note: the content is aligned to the right by default because
      // the 'labelPlacement="start"' component prop changes the flexbox
      // direction to "row-reverse"
      justifyContent: "space-between",
    },
  });
  

function CreateExerciseWithTemplate(activeTemplate){

    const classes = useStyles();
    const [exerciseName,setExerciseName] = useState()
    const [template,setTemplate] = useState('A2SHypertrophy')
    const [category,setCategory] = useState()

  
    useEffect(()=>{
        activeTemplate.activeTemplate(template)
    },[template]
    )
    return(
    <div>
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
        <br/>
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
        <br/>    
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
        
    </div>
)
}

  export default forwardRef(CreateExerciseWithTemplate);
