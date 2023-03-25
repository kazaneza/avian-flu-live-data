import { configureStore } from "@reduxjs/toolkit";
import continentsSlice from "./continentsSlice";
import countriesSlice from "./countriesSlice";
import UISlice from "./UISlice";

const store = configureStore({
  reducer: {
    continents: continentsSlice,
    countries: countriesSlice,
    ui: UISlice,
  },
});

export default store;
