import React from "react";
// import store from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import FilterNavigation from "./Filter/FilterNavigation";
import classes from "./OnThoughtLayout.module.css";
import Header from "./Header/Header";
import Notes from "./NotesContainer/Notes";
import FooterNav from "./Footer/FooterNav";
import NoteForm from "./NewNote/NoteForm";
import { action } from "../../store/newNoteVisible";

function OnThoughtLayout() {
  const showNote = useSelector((state) => state.noteVisibility.newNoteStatus);
  const dispatch = useDispatch();

  const closeNoteHandler = () => {
    dispatch(action.closeNote());
  };
  const toggleNoteHandler = () => {
    dispatch(action.toggleNote());
  };
  return (
    <>
    <div className={classes.container}>
      <Header />
      <FilterNavigation />
      <Notes />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FooterNav toggleNote={toggleNoteHandler} />
      </div>
    </div>
    {showNote && <NoteForm closeNote={closeNoteHandler} />}
    </>
  );
}

export default OnThoughtLayout;
