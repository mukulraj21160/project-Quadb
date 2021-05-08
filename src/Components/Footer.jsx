import React from "react";
import { Button, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    borderTop: "2px solid #2e3241",
    padding: "13px",
    [theme.breakpoints.up("md")]: {
      borderTop: "2px solid #2e3241",
      padding: "13px",
    },
    [theme.breakpoints.up("lg")]: {
      borderTop: "2px solid #2e3241",
      padding: "13px",
    },
  },
  footer: {
    color: "#888686",
    paddingRight: "12px",
    fontSize: "10.1px",
    fontWeight: "400",
    [theme.breakpoints.up("md")]: {
      color: "#888686",
      paddingRight: "12px",
      fontSize: "12px",
      fontWeight: "400",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#888686",
      paddingRight: "12px",
      fontSize: "12px",
      fontWeight: "400",
    },
  },
  support: {
    color: "#888686",
    marginLeft: "auto",
    fontSize: "10.1px",
    fontWeight: "400",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      color: "#888686",
      marginLeft: "auto",
      paddingRight: "12px",
      fontSize: "12px",
      fontWeight: "400",
      cursor: "pointer",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#888686",
      marginLeft: "auto",
      paddingRight: "12px",
      fontSize: "12px",
      fontWeight: "400",
      cursor: "pointer",
    },
  },
  btn: {
    fontSize: "10px",
    textAlign: "center",
    textTransform: "none",
    color: "#17a2b8",
    "&:hover": {
      backgroundColor: "#17a2b8",
      color: "#fff",
      borderColor: "#17a2b8",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
      textAlign: "center",
      textTransform: "none",
      color: "#17a2b8",
      "&:hover": {
        backgroundColor: "#17a2b8",
        color: "#fff",
        borderColor: "#17a2b8",
      },
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
      textAlign: "center",
      textTransform: "none",
      color: "#17a2b8",
      "&:hover": {
        backgroundColor: "#17a2b8",
        color: "#fff",
        borderColor: "#17a2b8",
      },
    },
  },
  button: {
    fontSize: "10px",
    paddingBottom: "5px",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
      paddingBottom: "5px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
      paddingBottom: "5px",
    },
  },
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = useStyles();
  return (
    <div>
      <Grid container item className={classes.main}>
        <Typography className={classes.footer}> Copyright © {year}</Typography>
        <Typography className={classes.footer}>HodlInfo.com</Typography>
        <Typography className={classes.footer}>
          Developed By{" "}
          <span style={{ color: "rgb(61, 198, 193)", cursor: "pointer" }}>
            QuadBTech
          </span>
        </Typography>
        <Typography className={classes.support}>Support</Typography>
      </Grid>
      <div style={{ textAlign: "center" }} className={classes.button}>
        <Button variant="outlined" color="inherit" className={classes.btn}>
          Add hodlinfo to home screen
        </Button>
      </div>
    </div>
  );
};

export default Footer;
