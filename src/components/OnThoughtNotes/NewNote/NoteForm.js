import React, {useRef} from 'react'
import classes from './NoteForm.module.css';

function NoteForm() {
  const titleRef = useRef();
  const desRef = useRef();

  const submitHandler = (e)=>{
    e.preventDefault();
    const title = titleRef.current.value;
    const description = desRef.current.value;
    console.log(title);
    console.log(description);
    titleRef.current.value='';
    desRef.current.value='';
  }
  return (
    <div className={classes.container}>
      <form className={classes.noteForm} onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input type='text' ref={titleRef} />
        </div>
        <div>
          <label>Description</label>
          <textarea style={{resize:'none'}} ref={desRef} rows={6}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default NoteForm