import React from "react";
import PropTypes from "prop-types";
// Styles
import partnersStyle from "../../assets/jss/partnersStyle";
// Material UI
import { withStyles } from "@material-ui/core";
// IMG
import img0 from "../../assets/img/download-0.png";
import img1 from "../../assets/img/download-1.png";
import img2 from "../../assets/img/download-2.png";
import img3 from "../../assets/img/download-3.png";
import img4 from "../../assets/img/download-4.png";
import img5 from "../../assets/img/download-5.png";
import img6 from "../../assets/img/download-6.png";
import img7 from "../../assets/img/download-7.png";
import img8 from "../../assets/img/download-8.png";
import img9 from "../../assets/img/download-9.png";
import img10 from "../../assets/img/download-10.png";
import img11 from "../../assets/img/download-11.png";

const Partners = props => {
  const { classes } = props;
  return (
    <div className={["center", classes.root].join(" ")}>
      <h2 className={classes.h2}>Trusted By</h2>

      <div className={["container", classes.container].join(" ")}>
        <a href="" target="_blank" className={classes.a}>
          <img src={img0} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img1} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img2} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img3} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img4} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img5} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img6} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img7} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img8} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img9} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img10} alt="" className={classes.img} />
        </a>
        <a href="" target="_blank" className={classes.a}>
          <img src={img11} alt="" className={classes.img} />
        </a>
      </div>
    </div>
  );
};

Partners.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(partnersStyle)(Partners);
