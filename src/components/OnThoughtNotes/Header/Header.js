import React from "react";
import classes from "./Header.module.css";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <div className={classes.intro}>
        <div>
          <h1>Hi Mudit,</h1>
          <h1>Good morning</h1>
        </div>
        <div>
          <ProfileIcon/>
        </div>
      </div>
      <div className={classes.search}>
        <SearchBar/>
      </div>
    </>
  );
}

export default Header;
