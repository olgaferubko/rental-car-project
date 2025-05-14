import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectFilters } from "../filters/selectors";
import { selectPage } from "./selectors";

export const fetchCars = createAsyncThunk("cars/fetchAll", async (_, thunkAPI) => {
  const filters = selectFilters(thunkAPI.getState());
  const page = selectPage(thunkAPI.getState());

  const query = {
    page,
    limit: 8,
  };

  if (filters.brand) query.brand = filters.brand;
  if (filters.rentalPrice) query.rentalPrice = filters.rentalPrice;
  if (filters.mileageFrom) query.minMileage = filters.mileageFrom;
  if (filters.mileageTo) query.maxMileage = filters.mileageTo;

  const params = new URLSearchParams(query);

  try {
    const res = await axios.get(`https://car-rental-api.goit.global/cars?${params}`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
