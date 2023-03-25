/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://disease.sh/v3/covid-19/continents";
const API_URL_GLOBAL = "https://disease.sh/v3/covid-19/all";

export const getContinentsData = createAsyncThunk(
  "continents/getContinentsData",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);
export const getGlobalData = createAsyncThunk(
  "continents/getGlobalData",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL_GLOBAL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);
export const getContinentData = createAsyncThunk(
  "continents/getContinentData",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

const initialState = {
  isLoading: false,
  continents: [],
  continent: {},
  continentSearchTerm: "",
  global: {},
  continentFilterByCasesNumArr: [],
};

const continentsSlice = createSlice({
  name: "continents",
  initialState,

  reducers: {
    triggerContinentSearch: (state, action) => {
      const searchTerm = action.payload?.toLowerCase();
      state.continentSearchTerm = searchTerm;
    },
    triggerContinentFilterByCases: (state, action) => {
      const value = action.payload;
      if (value.trim().length < 1) {
        // reset filter
        state.continentFilterByCasesNumArr = [];
      } else {
        const num1 = +value.split(",")[0];
        const num2 = +value.split(",")[1];

        state.continentFilterByCasesNumArr = [num1, num2];
      }
    },
  },
  extraReducers: (builder) => {
    // get continents
    builder
      .addCase(getContinentsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContinentsData.fulfilled, (state, action) => {
        const res = action.payload;
        state.continents = res;
        state.isLoading = false;
      })
      .addCase(getContinentsData.rejected, (state) => {
        state.isLoading = false;
      });

    // get single continent
    builder
      .addCase(getContinentData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContinentData.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        state.continent = res;
      })
      .addCase(getContinentData.rejected, (state) => {
        state.isLoading = false;
      });

    // get global data
    builder
      .addCase(getGlobalData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGlobalData.fulfilled, (state, action) => {
        const res = action.payload;
        state.global = res;
        state.isLoading = false;
      })
      .addCase(getGlobalData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const continentsActions = continentsSlice.actions;
export default continentsSlice.reducer;
