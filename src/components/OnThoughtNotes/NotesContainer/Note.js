import React from 'react'
import classes from './Note.module.css';

function Note(props) {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes['note-title']}>{props.title}</h2>
        <p className={classes['note-body']}>{props.body}</p>
      </div>
      <div className={classes['note-info']}>
        <p className={classes.date}>Date</p>
        <p className={classes.tag}>Tag</p>
      </div>
    </div>
  )
}

export default Note