import { Grid } from "@material-ui/core";
import React from "react";
import DashboardCard from "../Common/DashboardCard";


const data = [
  {
    title: "Login",
    description: "Login Portal",
    image: "",
    route: "/Login",
    id: 1,
  },
  {
    title: "Current Workout",
    description: "Display weekly workout cards",
    image: "",
    route: "/DailyLiftView",
    id: 2,
  },
  {
    title: "Create Workout",
    description: "Add exercise to db",
    image: "",
    route: "/CreateWorkout",
    id: 3,
  },
  {
    title: "View Workout",
    description: "View Daily Workout",
    image: "",
    route: "/DailyWorkoutView",
    id: 4,
  },
  {
    title: "Current Workout",
    description: "Display weekly workout cards",
    image: "",
    route: "/A2SDailyLiftView",
    id: 5,
  },
  {
    title: "Current Workout",
    description: "Display weekly workout cards",
    image: "",
    route: "/A2SDailyLiftView",
    id: 6,
  },
];

function Dashboard() {
  return (
    <div>
      <Grid container>
        {data.map(d => (
          <Grid item key={d.key} xs={4} sm={4} md={4} lg={4} style={{
            paddingLeft: 100.,
            paddingBottom: 24
          }}>
            <DashboardCard props={d}></DashboardCard>
          </Grid>
        ))}
      </Grid >
    </div>
  );
}

export default Dashboard;
