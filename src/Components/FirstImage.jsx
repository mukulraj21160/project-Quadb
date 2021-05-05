import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import image_one from "../Assets/img_one.png";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px 30px",
  },
  img: {
    width: "100%",
    padding: "0px 0px 20px",
    cursor: "pointer",
  },
}));

const FirstImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container item lg={12}>
        <img src={image_one} alt="custom" className={classes.img} />
      </Grid>
    </div>
  );
};

export default FirstImage;
