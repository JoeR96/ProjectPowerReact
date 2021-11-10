import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import CustomInput from '../Common/CustomInput'
import Button from '../Common/Button'
import Axios from 'axios'
import {
    Redirect
} from "react-router-dom";
import React, {
    Component
} from "react";

export default class ScaffoldA2SExerciseForm extends Component {
    state = {
        currentExercise : {
        exerciseName: "",
        auxiliaryLift: false,
        trainingMax: 0.00
    },
    exerciseCollection:[]
}
    handleSubmit = this.handleSubmit.bind(this);
     exerciseCollection = [];

    handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
        console.log(e.currentTarget.id)
    };

    handleSelectChange = e => {
        this.setState({ [e.currentTarget.id]: e.target.value });
        console.log(e.currentTarget.id)
    };

    
    
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            Name: this.state.exerciseName,
            AuxillaryLift: this.state.auxiliaryLift,
            TrainingMax: this.state.trainingMax,
        }

        this.state.exerciseCollection.push(data);
    }


    render() {
        return (
            <div className="App">
                <form className="form">
                    <CustomInput
                        labelText="Exercise Name"
                        id="exerciseName"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="text"
                    />
                    <CustomInput

                        labelText="Training Max"
                        id="trainingMax"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="number"
                    />

                    <Select
                        id="auxiliaryLift"
                        label="auxiliaryLift"
                        onChange={this.handleSelectChange}
                        defaultValue={true}
                    >
                        <MenuItem id="auxiliaryLift" value={true}>Yes</MenuItem>
                        <MenuItem id="auxiliaryLift" value={false}>No</MenuItem>
                    </Select>
                  
                    <Button onClick={this.handleSubmit} type="submit" color="primary" className="form__custom-button">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}
