import React, { useRef } from "react";
import classes from "./NoteForm.module.css";
import Modal from "../../UI/Modal";

function NoteForm(props) {
  const titleRef = useRef();
  const desRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = desRef.current.value;
    console.log(title);
    console.log(description);
    titleRef.current.value = "";
    desRef.current.value = "";
  };

  const cancelBtnHandler = () => {
    props.closeNote();
  }
  return (
    <Modal onClose={props.closeNote}>
      <div className={classes.container}>
        <form className={classes.noteForm} onSubmit={submitHandler}>
          <div className={classes.title}>
            <input
              type="text"
              id="title"
              ref={titleRef}
              placeholder="Title"
              required={true}
            />
          </div>
          <div className={classes.description}>
            <textarea
              style={{ resize: "none" }}
              id="des"
              ref={desRef}
              rows={6}
              placeholder="Write your thought..."
            />
          </div>
          <div className={classes.btn}>
            <button type="button" onClick={cancelBtnHandler}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NoteForm;
