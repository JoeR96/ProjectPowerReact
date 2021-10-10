import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    Redirect
} from "react-router-dom";
export default function DashboardCard(props) {
    console.log(props)
    console.log(props.props)


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => <Redirect to="/A2SDailyLiftView" />}>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.props.title}
                        
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}