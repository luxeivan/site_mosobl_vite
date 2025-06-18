import {createSlice } from "@reduxjs/toolkit";

export const mosoblSlice = createSlice({
  name: "mosobl",
  initialState: {
    listMosobl: false,
  },
  reducers: {
    sendIsOkFalse: (state) => {
      state.listMosobl = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sendIsOkFalse } = mosoblSlice.actions;

export default mosoblSlice.reducer;
