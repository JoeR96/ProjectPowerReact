import './App.css';
import './components/A2SDailyLiftView/A2SDailyLiftView'
import LoginForm from './components/Login/LoginForm'
import Header from './components/NavBar/header'
import '../src/components/styles.css'
import Dashboard from './components/Dashboard/Dashboard'
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

    return (
        <div className="App">
            <ScaffoldA2SExerciseForm>
            </ScaffoldA2SExerciseForm>
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
