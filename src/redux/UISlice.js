/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "countries",
  sortBy: "",
  sortTriggered: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    checkContinents: (state) => {
      state.view = "continents";
    },
    checkCountries: (state) => {
      state.view = "countries";
    },
    sortAscending: (state) => {
      state.sortBy = "asc";
      state.sortTriggered = true;
    },
    sortDescending: (state) => {
      state.sortBy = "dsc";
      state.sortTriggered = true;
    },
    resetSort: (state) => {
      state.sortBy = "";
      state.sortTriggered = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
