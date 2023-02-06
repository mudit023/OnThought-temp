import React from "react";
import { Link } from "react-router-dom";
import classes from './LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <h1>LandingPage</h1>
      <Link to="/home" className={classes.btn}>OnThought</Link>
    </>
  );
}

export default LandingPage;
