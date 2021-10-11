import React from 'react'
import { Grid } from '@material-ui/core';
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
            route: "/Login"
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView"
        },
        {
            title: "Scaffold Workout",
            description: "Add exercise to db",
            image: "",
            route: "/ScaffoldA2SExerciseForm"
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView"
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView"
        },
        {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView"
        }]
    
    return (
        <Grid container spacing={3}>
            {data.map(d => (
                <Grid item xs={6} align="center">
                    <DashboardCard props={d}>
                    </DashboardCard>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid container justify="center">
                                    {d.description}
                                </Grid>
                            </Grid>
                            <Divider light />
                        </Grid>
                    </Grid>
                </Grid>

            ))}
        </Grid>
        )
}

export default Dashboard