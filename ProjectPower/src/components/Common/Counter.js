import { Grid } from '@material-ui/core';
import {React,useEffect,useState} from 'react';
import Button from 'mui-button';
import { Typography } from '@material-ui/core';

function Counter({initialCount,name}){
    const [count,setCount] = useState(initialCount)

    function incrementCount(){
        setCount(currCount => currCount + 1)
    }

    function decrementCount(){
        setCount(currCount => currCount - 1)
    }

    return(
        <div>
            <Typography style={{ fontWeight: 600,
            paddingTop:12,
            paddingBottom:12
             }}>{name}</Typography>
            <Grid container>
                <Grid item xs={3} sm={4} md={4}lg={4}>
                    <Button onClick={incrementCount} variant="contained" >
                        <Typography style={{ fontWeight: 600 }}>+</Typography>
                    </Button>
                </Grid>
                <Grid item xs={6} sm={4} md={4}lg={4}>
                    <Typography style={{ fontWeight: 600 }}>{parseInt(count)}</Typography>
                </Grid>
                <Grid item xs={3} sm={4} md={4}lg={4}>
                    <Button onClick={decrementCount} variant="contained" >
                        <Typography style={{ fontWeight: 600 }}>-</Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
       
    )
}

export default Counter