import React from 'react'
import ReactDOM from 'react-dom'
import NoteForm from './NoteForm'
import classes from './Modal.module.css'


function ModalOverlay(){
  return(
    <div className={classes.noteBackground}>
      {/* <div className={classes.overlay}></div> */}
      <NoteForm/>
    </div>
  )
}

function Modal() {
  return (
    <>
      {ReactDOM.createPortal(<ModalOverlay/>, document.querySelector('#overlay'))}
    </>
  )
}

export default Modal