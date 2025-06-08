import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filtersValue: {
        brand: null,
        price: null,
        mileageFrom: null,
        mileageTo: null,
    },
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters(state, action) {
            Object.keys(action.payload).forEach(key => {
                state.filtersValue[key] = action.payload[key];
            });
        },
        resetFilters(state) {
            state.filtersValue = { ...initialState.filtersValue };
        },
    },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;