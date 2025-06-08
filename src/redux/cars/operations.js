import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getAllCars = createAsyncThunk('getAllCars', async ({ brand, rentalPrice, minMileage, maxMileage, limit = 12, page = 1 }, thunkAPI) => {
    try {
        const { data } = await axios.get('cars', {
            params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
        });
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const getCarsBrands = createAsyncThunk('getCarsBrands', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/brands');
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const getCarsDetails = createAsyncThunk('getCarDetails', async (id, thunkAPI) => {
    try {
        const { data } = await axios.get(`/cars/${id}`);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});