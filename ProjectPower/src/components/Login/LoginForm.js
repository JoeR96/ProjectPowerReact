
import CustomInput from '../Common/CustomInput'
import Button from '../Common/Button'
import Axios from 'axios'
import {
    Redirect
} from "react-router-dom";
import React, {
    Component
} from "react";

export default class App extends Component {
    state = {
        username: "",
        password: "",
        redirectToReferrer: false
    }
    handleSubmit = this.handleSubmit.bind(this);

    handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
        
    };

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
        }
        
        Axios.post('http://localhost:1337/api/login', { data })
            .then(res => {

            })
        this.setState({ redirectToReferrer: true })
    }


    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer) {
            return <Redirect to="/Dashboard"/>
        }
        return (
            <div className="App">
                <form className="form">
                    <CustomInput
                        labelText="Email"
                        id="username"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="text"
                    />
                    <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="password"
                    />

                    <Button onClick={this.handleSubmit} handleChange={this.handleChange} id="redirectToReferrer" type="submit" color="primary" className="form__custom-button">
                        Log in
                    </Button>
                </form>
            </div>
        );
    }
}
