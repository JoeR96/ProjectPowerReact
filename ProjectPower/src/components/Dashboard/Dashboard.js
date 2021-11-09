import React from 'react'
import { Grid,Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import DashboardCard from '../Common/DashboardCard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1), //grid padding
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200
    },
}));

function Dashboard() {
    const classes = useStyles();
    const data = [
        {
            title: "LOGIN",
            description: "spaceAids",
            image: "",
            route: "/Login",
            id: 1
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView",
            id: 2
        },
        {
            title: "Scaffold Workout",
            description: "Add exercise to db",
            image: "",
            route: "/ScaffoldA2SExerciseForm",
            id: 3
        },
        {
            title: "Create Workout",
            description: "Create workout",
            image: "",
            route: "/WorkoutCreator",
            id: 4
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView",
            id: 5
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView",
            id: 6
        }]
    
    return (
        <Container>
            <Grid>
                {data.map(d => (             
                    <Grid item key ={d.key} xs={4}md={6}lg={4}>
                        <DashboardCard props={d}></DashboardCard>
                    </Grid>                          
                ))}
            </Grid>
        </Container>
        )
}

export default Dashboard