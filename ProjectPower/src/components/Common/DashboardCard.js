import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    Redirect
} from "react-router-dom";
import { useState } from "react";

export default function DashboardCard(title) {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    
    if (redirectToReferrer) {
        return <Redirect to={title.props.route}/>
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => setRedirectToReferrer((true))}>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title.props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                  
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}