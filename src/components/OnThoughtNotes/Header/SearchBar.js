import React from 'react'
import classes from './SearchBar.module.css'
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className={classes["search-bar"]}>
        <div className={classes.search_icon}><FiSearch/></div>
        <input type="text" placeholder='Search' />
    </div>
  )
}

export default SearchBar