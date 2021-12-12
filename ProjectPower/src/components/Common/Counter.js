import { Grid } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import Button from "mui-button";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
function Counter({ initialCount, name, setState }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setState(count)
  }, [count]);


  function incrementCount() {
    setCount((currCount) => currCount + 1);
  }

  function decrementCount() {
    setCount((currCount) => currCount - 1);
  }

  return (
    <div>
      <Typography
        style={{ fontWeight: 600, paddingTop: 12, paddingBottom: 12 }}
      >
        {name}
      </Typography>
      <Grid container>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Button onClick={decrementCount} variant="contained">
            <Typography style={{
              fontWeight: 600}}>-</Typography>
          </Button>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Typography style={{
            fontWeight: 600
           }}>{parseInt(count)}</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Button onClick={incrementCount} variant="contained">
            <Typography style={{
              fontWeight: 600 }}>+</Typography>
          </Button>
        </Grid>
        
        
      </Grid>
    </div>
  );
}

export default Counter;
