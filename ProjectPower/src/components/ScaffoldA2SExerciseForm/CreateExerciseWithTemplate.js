import {React,useState} from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

function CreateExerciseWithTemplate(){

    const [exerciseName,setExerciseName] = useState()
    const [template,setTemplate] = useState()
    const [category,setCategory] = useState()

    return(
    <div>
        <label>Exercise Name:</label>
            <br />
                <input 
                name='exerciseName' 
                type='text'
                value={exerciseName}
                onChange={e => setExerciseName(e.target.value)}
                />
        <br/>
            <Select
                id="category"
                label="category"
                onChange={e => setCategory(e.target.value)}
                defaultValue={'BIGDAVEARMS'}
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
                defaultValue={'Hypertrophy'}
            >
                <MenuItem id="category" value={'Hypertrophy'}>Hypertrophy</MenuItem>
                <MenuItem id="category" value={'RepsThenSets'}>Reps Then Sets</MenuItem>
            </Select>
    </div>
)
}

  export default CreateExerciseWithTemplate;
