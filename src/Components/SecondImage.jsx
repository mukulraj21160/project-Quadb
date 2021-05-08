import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import image_Two from "../Assets/img_two.png";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "20px",
  },
  img: {
    width: "100%",
    cursor: "pointer",
  },
}));

const SecondImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container item>
        <img src={image_Two} alt="custom" className={classes.img} />
      </Grid>
    </div>
  );
};

export default SecondImage;
