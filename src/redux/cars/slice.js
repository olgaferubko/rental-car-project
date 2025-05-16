import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCars, getCarsBrands, getCarsDetails } from "./operations";

const initialState = {
  brands: [],
  cars: [],
  page: 1,
  totalPages: null,
  details: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalPages = payload.totalPages;
        if (state.page === 1) {
          state.cars = payload.cars;
        } else {
          state.cars = [...state.cars, ...payload.cars];
        }
      })
      .addCase(getCarsBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brands = payload;
      })
      .addCase(getCarsDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.details = payload;
      })
      .addMatcher(isAnyOf(getAllCars.pending, getCarsBrands.pending, getCarsDetails.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAllCars.rejected, getCarsBrands.rejected, getCarsDetails.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || null;
      });
  },
});

export const { incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
