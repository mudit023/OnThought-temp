import { createSlice } from "@reduxjs/toolkit";

const noteVisibility = createSlice({
  name: 'new note status',
  initialState: {newNoteStatus: false},
  reducers: {
    toggleNote(state){
      state.newNoteStatus = !state.newNoteStatus;
    },
    closeNote(state){
      state.newNoteStatus = false;
    },
  }
});

export const action = noteVisibility.actions;
const noteVisibilityReducer = noteVisibility.reducer;
export default noteVisibilityReducer;