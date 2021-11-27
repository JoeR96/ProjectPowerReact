import "./App.css";
import "./components/A2SDailyLiftView/A2SDailyLiftView";
import "swagger-editor/dist/swagger-editor.css";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/NavBar/header";
import "../src/components/styles.css";
import Dashboard from "./components/Dashboard/Dashboard";
import WorkoutCreation from "./components/WorkoutCreation/WorkoutCreation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import A2SDailyLiftView from "./components/A2SDailyLiftView/A2SDailyLiftView";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import CreateExerciseWithTemplate from "./components/ScaffoldA2SExerciseForm/CreateExerciseWithTemplate";
export const themeOptions = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "10rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />

      <div className="App">
        <div id="swagger-editor"></div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route
              exact
              path="/A2SDailyLiftView"
              component={A2SDailyLiftView}
            />
            <Route exact path="/Login" component={LoginForm} />
            <Route
              exact
              path="/ScaffoldA2SExerciseForm"
              component={CreateExerciseWithTemplate}
            />
            <Route exact path="/WorkoutCreator" component={WorkoutCreation} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
