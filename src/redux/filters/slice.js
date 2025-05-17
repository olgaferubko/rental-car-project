import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filters:{
    brand: "",
    price: null,
    mileageFrom: "",
    mileageTo: "",
  }
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
            Object.keys(action.payload).forEach(key => {
                state.filters[key] = action.payload[key];
            });
    },
    clearFilters(state) {
            state.filters = { ...initialState.filters };
        },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;