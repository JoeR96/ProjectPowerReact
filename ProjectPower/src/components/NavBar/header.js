// IMPORTING APIS
import React from "react";
import Box from '@material-ui/core/Box';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    ListItemIcon,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import A2SDailyLiftView from "../A2SDailyLiftView/A2SDailyLiftView";

// REACT APP IMPORTS




// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Box pb={11}>
            <div className={classes.root}>
                <HideOnScroll {...props}>
                        <AppBar>
                            <Toolbar>
                                <Typography
                                    variant="h5"
                                    component="p"
                                    color="textSecondary"
                                    className={classes.title}
                                >
                                    Average 2 Savage BIG DICK CYCLES
                                    {process.env.PUBLIC_URL}
                                </Typography>
                                {isMobile ? (
                                    <>
                                        <IconButton
                                            color="textPrimary"
                                            className={classes.menuButton}
                                            edge="start"
                                            aria-label="menu"
                                            onClick={handleMenu}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            KeepMounted
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            open={open}
                                        >

                                            <MenuItem
                                                onClick={() => setAnchorEl(null)}
                                                component={Link}
                                                to={process.env.PUBLIC_URL + "/A2SDailyLiftView"}
                                            >
                                                <ListItemIcon>
                                                    <SchoolIcon />
                                                </ListItemIcon>
                                                <Typography variant="h6"> Daily Lift View </Typography>
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() => setAnchorEl(null)}
                                                component={Link}
                                                to={process.env.PUBLIC_URL + "/Dashboard"}
                                            >
                                                <ListItemIcon>
                                                    <PersonIcon />
                                                </ListItemIcon>
                                                <Typography variant="h6"> Dashboard</Typography>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                ) : (
                                    <div style={{ marginRight: "2rem" }}>
                                            <Button
                                                variant="text"
                                                color="default"
                                                component={Link}
                                            onClick={() => setAnchorEl(null)}
                                            to={process.env.PUBLIC_URL + "/Dashboard"}>
                                            <PersonIcon />
                                            Dashboard
                                        </Button>
                                            <Button
                                                variant="text"
                                                color="default"
                                                component={Link}
                                            onClick={() => setAnchorEl(null)}
                                            to={process.env.PUBLIC_URL + "/A2SDailyLiftView"}>
                                            <PersonIcon />
                                            Current Workout
                                        </Button>
                                    </div>
                                )}
                            </Toolbar>
                        </AppBar>
                </HideOnScroll>
            </div>
        </Box>
    );
};

export default Header;