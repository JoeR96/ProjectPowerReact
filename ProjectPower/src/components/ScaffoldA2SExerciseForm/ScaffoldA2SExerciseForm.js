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
        exerciseName: "",
        auxiliaryLift: false,
        trainingMax: 0.00,
        block: "HypertrophyBlock",
        scaffoldAll: true
    }
    handleSubmit = this.handleSubmit.bind(this);


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
            exerciseName: this.state.exerciseName,
            auxiliaryLift: this.state.auxiliaryLift,
            trainingMax: this.state.trainingMax,
            block: this.state.block,
            scaffoldAll: this.state.scaffoldAll
        }
        console.log(this.scaffoldAll)
        console.log(data.scaffoldAll)
        Axios.post('http://localhost:1337/api/scaffoldExercise', data)
            .then(res => {

            })
        console.log(data);
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
                        id="block"
                        label="block"
                        onChange={this.handleSelectChange}
                        defaultValue={"HypertrophyBlock"}
                    >
                        <MenuItem id="block" value={"HypertrophyBlock"}>Hypertrophy Block</MenuItem>
                        <MenuItem id="block" value={"StrengthBlock"}>Strength Block</MenuItem>
                        <MenuItem id="block" value={"PeakingBlock"}>Peaking Block</MenuItem>
                    </Select>
                    <Select
                        id="auxiliaryLift"
                        label="auxiliaryLift"
                        onChange={this.handleSelectChange}
                        defaultValue={true}
                    >
                        <MenuItem id="auxiliaryLift" value={true}>Yes</MenuItem>
                        <MenuItem id="auxiliaryLift" value={false}>No</MenuItem>
                    </Select>
                    <Select
                        id="scaffoldAll"
                        label="scaffoldAll"
                        onChange={this.handleSelectChange}
                        defaultValue={true}
                    >
                        <MenuItem id="scaffoldAll" value={true}>Yes</MenuItem>
                        <MenuItem id="scaffoldAll" value={false}>No</MenuItem>
                    </Select>
                    <Button onClick={this.handleSubmit} type="submit" color="primary" className="form__custom-button">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}
