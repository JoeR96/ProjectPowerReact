import React from 'react'
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
    const data = [{
        title: "WIZARD",
        description: "spaceAids",
        image:""
    }, {
            title: "Current Workout",
            description: "Display weekly workout cards",
            image: "",
            route: "/A2SDailyLiftView"
        }]
    return (
        <React.Fragment>
            <Grid align="center" justify="center" alignItems="center" >
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <DashboardCard props={data}>
                        </DashboardCard>
                    </Grid>
                    <Grid item xs={4}>
                        <DashboardCard props={data}>
                        </DashboardCard>
                    </Grid>
                    <Grid item xs={4}>
                        <DashboardCard props={data}>
                        </DashboardCard>
                    </Grid>}
                </Grid>}
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <DashboardCard props={data}>
                        </DashboardCard>
                    </Grid>
                    <Grid item xs={4}>
                        <DashboardCard props={data}>
                        </DashboardCard>
                    </Grid>
                    <Grid item xs={4}>
                        <DashboardCard props={data}>
                        </DashboardCard>
                    </Grid>
                </Grid>             
            </Grid>
        </React.Fragment>
        )
}

export default Dashboard