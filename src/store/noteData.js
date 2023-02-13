import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [{
    title: 'nfkankfnakfcnaknfkanfknakfnaknfkanfknaknfakn',
    body: 'nfkankfnakfcnaknfkanfknakfnaknfkanfknaknfaknnfkankfnakfcnaknfkanfknakfnaknfkanfknaknfakn',
    id: '1',
    dateObj: {day: 13, month: 'Feb', year: 2023},
  },
  {
    title: 'nfkankfnakfcnaknfkanfknakfnaknfkanfknaknfakn',
    body: 'nfkankfnakfcnaknfkanfknakfnaknfkanfknaknfaknnfkankfnakfcnaknfkanfknakfnaknfkanfknaknfakn',
    id: '2',
    dateObj: {day: 13, month: 'Feb', year: 2023},
  },
  {
    title: 'nfkankfnakfcnaknfkanfknakfnaknfkanfknaknfakn',
    body: 'nfkankfnakfcnaknfkanfknakfnaknfkanfknaknfaknnfkankfnakfcnaknfkanfknakfnaknfkanfknaknfakn',
    id: '3',
    dateObj: {day: 13, month: 'Feb', year: 2023},
  }]
}

const slice = createSlice({
  name: 'note Slice',
  initialState,
  reducers: {
    addNote(state, action){
      const date = new Date();
      const dateData = date.toUTCString().split(' ');
      const day = dateData[1];
      const month = dateData[2];
      const year = dateData[3];
      const dateObj = {
        day,
        month,
        year
      };
      const data = action.payload;
      state.notes = [...state.notes, {...data, dateObj, id: Math.floor(Math.random()*1000)*Math.random()}]
      console.log(state.notes);
    },
    removeNote(state, action){
      const id = action.payload;
      const deleteInd = state.notes.findIndex((item)=>{
        return (item.id===id)
      });
      state.notes.splice(deleteInd, 1);
    },
    editNote(state, action){
      const date = new Date();
      const dateData = date.toUTCString().split(' ');
      const day = dateData[1];
      const month = dateData[2];
      const year = dateData[3];
      const dateObj = {
        day,
        month,
        year
      };
      const data = action.payload;
      const id = data.id;
      const editInd = state.notes.findIndex((item)=>{
        return (item.id===id)
      });
      const newObj = {
        ...data,
        dateObj
      }
      state.notes[editInd]=newObj;
    },
  }
})

export const action = slice.actions;
const noteReducer = slice.reducer;

export default noteReducer;