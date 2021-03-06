import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import logo from "../Assets/logo.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    textAlign: "center",
    padding: "20px 30px 0px",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      textAlign: "left",
    },
  },
  logo: {
    padding: "10px",
    width: "80%",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      padding: "10px",
      width: "70%",
      cursor: "pointer",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px",
      width: "70%",
      cursor: "pointer",
    },
  },
  sub_Title: {
    padding: "0px 15px",
    fontSize: "18px",
    margin: "-18px 0px 16px",
    color: "#808080",
    opacity: "0.8",
    [theme.breakpoints.up("md")]: {
      padding: "0px 15px",
      fontSize: "18px",
      margin: "-18px 0px 16px",
      color: "#808080",
      opacity: "0.8",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 15px",
      fontSize: "18px",
      margin: "-18px 0px 16px",
      color: "#808080",
      opacity: "0.8",
    },
  },
  btn_Section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
    },
  },
  btn: {
    fontSize: "14px",
    padding: "3px 7px",
    margin: "5px",
    color: "#fff",
    backgroundColor: "#2e3241",
    borderRadius: "10px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#545b62",
      borderColor: "#4e555b",
      color: "#fff",
    },
    [theme.breakpoints.up("md")]: {
      margin: "5px",
      color: "#fff",
      backgroundColor: "#2e3241",
      borderRadius: "10px",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#545b62",
        borderColor: "#4e555b",
        color: "#fff",
      },
    },
    [theme.breakpoints.up("lg")]: {
      padding: "7px 15px",
      margin: "10px",
      color: "#fff",
      backgroundColor: "#2e3241",
      borderRadius: "10px",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#545b62",
        borderColor: "#4e555b",
        color: "#fff",
      },
    },
  },
  telegram_Section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 15px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 15px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0px 15px",
    },
  },

  telegram: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "400",
    backgroundColor: "#3dc6c1",
    borderRadius: "10px",
    textTransform: "none",
    padding: "5px 10px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#3dc6c1",
      borderColor: "#3dc6c1",
      color: "#fff",
    },
    [theme.breakpoints.up("md")]: {
      color: "#fff",
      padding: "5px 8px",
      backgroundColor: "#3dc6c1",
      textTransform: "none",
      borderRadius: "10px",
      marginRight: "15px",
      "&:hover": {
        backgroundColor: "#3dc6c1",
        borderColor: "#3dc6c1",
        color: "#fff",
      },
    },
    [theme.breakpoints.up("lg")]: {
      padding: "7px 15px",
      color: "#fff",
      backgroundColor: "#3dc6c1",
      textTransform: "none",
      borderRadius: "10px",
      marginRight: "15px",
      "&:hover": {
        backgroundColor: "#3dc6c1",
        borderColor: "#3dc6c1",
        color: "#fff",
      },
    },
  },
  toggler: {
    fontSize: "65px",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      fontSize: "65px",
      color: "#fff",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "65px",
      color: "#fff",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container item>
        <Grid item lg={4} md={4} xs={12}>
          <img src={logo} alt="custom" className={classes.logo} />
          <div>
            <Typography className={classes.sub_Title}>
              Powered By{" "}
              <span style={{ color: "#3dc6c1", cursor: "pointer" }}>
                Finstreet{" "}
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className={classes.btn_Section}>
          <Button variant="contained" className={classes.btn}>
            INR
          </Button>
          <Button variant="contained" className={classes.btn}>
            BTC
          </Button>
          <Button variant="contained" className={classes.btn}>
            BUY BTC
          </Button>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className={classes.telegram_Section}>
          <Button variant="contained" className={classes.telegram}>
            <TelegramIcon />
            Connect Telegram
          </Button>
          <ToggleOnIcon className={classes.toggler} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
