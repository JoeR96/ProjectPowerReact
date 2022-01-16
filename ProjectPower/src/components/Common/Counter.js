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
        {name + "                                                                                                                     "}
       {parseInt(count)}
      </Typography>
      
      <Grid 
      container>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Button onClick={decrementCount} variant="outlined">
            <Typography style={{
              fontWeight: 600
            }}>-</Typography>
            
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography style={{
            fontWeight: 600
           }}></Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Button onClick={incrementCount} variant="outlined">
            <Typography style={{
              fontWeight: 600 }}>+</Typography>
          </Button>
        </Grid>
        
        
      </Grid>
    </div>
  );
}

export default Counter;
