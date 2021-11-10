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
import { ThemeProvider, useTheme } from '@material-ui/styles';

export default function DashboardCard(props) {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
       const theme = useTheme();
    if (redirectToReferrer) {
        return <Redirect to={props.props.route}/>
    }
 
    return (
        <Card className={theme} sx={{ maxWidth: 69*5}}>
            <CardActionArea onClick={() => setRedirectToReferrer((true))}>
                
                <CardContent >
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