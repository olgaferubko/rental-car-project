import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    cars: [],
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const newCar = action.payload;
      if (!newCar || !newCar.id) return;

      const existingIndex = state.cars.findIndex(car => car.id === newCar.id);

      if (existingIndex !== -1) {
        state.cars.splice(existingIndex, 1);
      } else {
        state.cars.push(newCar);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
