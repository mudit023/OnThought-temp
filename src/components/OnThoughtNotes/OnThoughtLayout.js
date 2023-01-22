import React from 'react'
import FilterNavigation from './Filter/FilterNavigation'
import classes from './OnThoughtLayout.module.css';
import Header from './Header/Header'
import Notes from './NotesContainer/Notes';

function OnThoughtLayout() {
  return (
    <div className={classes.container}>
      <Header/>
      <FilterNavigation/>
      <Notes/>
    </div>
  )
}

export default OnThoughtLayout