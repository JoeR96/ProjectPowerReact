import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import CustomInput from '../Common/CustomInput'
import Button from '../Common/Button'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'
import {
    Redirect
} from "react-router-dom";
import React, {
    Component
} from "react";

export default class ScaffoldA2SExerciseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            idIndex: parseInt(1)
        }
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
        this.setState({idIndex: this.state.idIndex + 1})
        const data = {
            Name: this.state.exerciseName,
            AuxillaryLift: this.state.auxiliaryLift,
            TrainingMax: this.state.trainingMax,
            uniqueId: uuidv4(),
            liftDay: 0,
            liftOrder: 0,
            template: 'HyperTrophy'
        }
        
        this.props.handler(data)
       
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
                  
                    <Select
                        id="auxiliaryLift"
                        label="auxiliaryLift"
                        onChange={this.handleSelectChange}
                        defaultValue={true}
                    >
                        <MenuItem id="auxiliaryLift" value={true}>Hypertrophy</MenuItem>
                        <MenuItem id="auxiliaryLift" value={false}>RepsThenSet</MenuItem>
                    </Select>

                    <Button onClick={this.handleSubmit} type="submit" color="primary" className="form__custom-button">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}
