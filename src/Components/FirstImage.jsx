import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import image_one from "../Assets/img_one.png";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "10px 25px 0px 25px",
    [theme.breakpoints.up("md")]: {
      padding: "0px 30px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 30px",
    },
  },
  img: {
    width: "100%",
    cursor: "pointer",
  },
}));

const FirstImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container item>
        <img src={image_one} alt="custom" className={classes.img} />
      </Grid>
    </div>
  );
};

export default FirstImage;
