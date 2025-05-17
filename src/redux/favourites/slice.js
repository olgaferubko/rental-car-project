import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
      cars: [],
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const car = action.payload;
      if (!car || !car.id) return;
    

      const index = state.cars.findIndex(car => car?.id === car.id);
      if (index !== -1) {
        state.cars.splice(index, 1);
      } else {
        state.cars.push(car);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
