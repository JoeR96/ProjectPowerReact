import './App.css';
import './components/A2SDailyLiftView/A2SDailyLiftView'
import SwaggerEditor, {plugins} from 'swagger-editor';
import 'swagger-editor/dist/swagger-editor.css';
import LoginForm from './components/Login/LoginForm'
import Header from './components/NavBar/header'
import '../src/components/styles.css'
import Dashboard from './components/Dashboard/Dashboard'
import { useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'
import A2SDailyLiftView from './components/A2SDailyLiftView/A2SDailyLiftView'
import ScaffoldA2SExerciseForm from './components/ScaffoldA2SExerciseForm/ScaffoldA2SExerciseForm'



function App() {

//     useEffect(() => {
//   window.editor = SwaggerEditor({
//       dom_id: '#swagger-editor',
//       layout: 'EditorLayout',
//       plugins: Object.values(plugins),
//       swagger2GeneratorUrl: 'https://localhost:44317//swagger/v1/swagger.json',
//       oas3GeneratorUrl: 'https://localhost:44317//swagger/v1/swagger.json',
//       swagger2ConverterUrl: 'https://localhost:44317//swagger/v1/swagger.json',
//   });
// }, [])

    return (
        
        <div className="App">
            <div id='swagger-editor'></div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                    <Route exact path="/A2SDailyLiftView" component={A2SDailyLiftView} />
                    <Route exact path="/Login" component={LoginForm} />
                    <Route exact path="/ScaffoldA2SExerciseForm" component={ScaffoldA2SExerciseForm} />
                </Switch>
            </Router>
        </div>
  );
}

export default App;
