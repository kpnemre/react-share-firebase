import React, { useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import Link from "@material-ui/core/Link";

import { FirebaseAuthContext } from "../context/AuthContext";
import firebase from '../firebase/firebase.utils';

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

export default function Navbar(props) {
  const { currentUser } = useContext(FirebaseAuthContext);
  // const { currentUser:{displayName} } = useContext(FirebaseAuthContext);
  // console.log(currentUser);
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  const handleClose =  ()=> {
    setAnchorEl(null);
  };
  const handleHomeClick = useCallback(() => {
    history.push(`/`);
  }, []);
const handleSignout = useCallback(()=>{
  firebase.signOut();
})
// hafızada tutar. 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleHomeClick}
          >
             <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Share
          </Typography>
          {/* {auth && ( */}
          {currentUser? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {currentUser?.displayName}
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
              </Menu>
            </div>
          ):(
            <>
             <MenuItem
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Sign in
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Sign up
          </MenuItem>
            </>
          )}
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
