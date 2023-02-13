import React, {useReducer} from "react";
// import store from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import FilterNavigation from "./Filter/FilterNavigation";
import classes from "./OnThoughtLayout.module.css";
import Header from "./Header/Header";
import Notes from "./NotesContainer/Notes";
import FooterNav from "./Footer/FooterNav";
import NoteForm from "./NewNote/NoteForm";
import { action } from "../../store/newNoteVisible";
import OpenNote from "./NotesContainer/OpenNote";

const reducerFun = (state, action) => {
  if(action.type==="open"){
    return {
      visibilityStatus: true,
      id: action.id
    }
  }
  else if(action.type==="close"){
    return {
      visibilityStatus: false,
      id: null
    }
  }
}
const initialState = {
  visibilityStatus: false,
  id: null
}

function OnThoughtLayout() {
  const [state, dispatchAction] = useReducer(reducerFun, initialState);
  const showNote = useSelector((state) => state.noteVisibility.newNoteStatus);
  const dispatch = useDispatch();


  const closeNoteHandler = () => {
    dispatch(action.closeNote());
  };
  const toggleNoteHandler = () => {
    dispatch(action.toggleNote());
  };

  const openOldNoteHandler = (id) => {
    console.log(id);
    dispatchAction({type:"open", id});
  }
  const closeOldNoteHandler = () => {
    dispatchAction({type:"close"});
  }
  return (
    <>
    <div className={classes.container}>
      <Header />
      <FilterNavigation />
      <Notes openOldNoteHandler={openOldNoteHandler} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FooterNav toggleNote={toggleNoteHandler} />
      </div>
    </div>
    {showNote && <NoteForm closeNote={closeNoteHandler} />}
    {state.visibilityStatus && <OpenNote id={state.id} closeOldNote={closeOldNoteHandler}/>}
    </>
  );
}

export default OnThoughtLayout;
