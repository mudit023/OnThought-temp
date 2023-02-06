import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      title: "Test Note 1",
      body: "This is the test note 1",
      id: 'n1'
    },
    {
      title: "Test Note 2",
      body: "This is the test note 2",
      id: 'n2'
    },
    {
      title: "Test Note 3",
      body: "This is the test note 3",
      id: 'n3'
    },
    {
      title: "Test Note 4",
      body: "This is the test note 4",
      id: 'n4'
    },
    {
      title: "Test Note 5",
      body: "This is the test note 5",
      id: 'n5'
    },
    {
      title: "Test Note 6",
      body: "This is the test note 6",
      id: 'n6'
    },
  ]
}

const slice = createSlice({
  name: 'note Slice',
  initialState,
  reducers: {
    addNote(state, action){
      
    },
    removeNote(){},
    editNote(){},
  }
})

export const action = slice.actions;
const noteReducer = slice.reducer;

export default noteReducer;