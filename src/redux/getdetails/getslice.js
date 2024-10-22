import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for fetching user data based on email
export const fetchPromisedata = createAsyncThunk('jsonserver/fetchPromisedata', async (email) => {
    const response = await axios.get(`http://localhost:3000/users?email=${email}`);
    return response.data[0]; // Ensure that you return the first user object
});

// Create a slice for managing the state
export const getData = createSlice({
    name: "json",
    initialState: {
        data: { cart: [] }, // Initialize with an empty cart
        error: null,
        loading: false, // Set loading to false initially
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPromisedata.fulfilled, (state, action) => {
                // Update the state with the fetched data
                state.data = action.payload; // Update data with the fetched user object
                state.loading = false; // Set loading to false
                state.error = null; // Clear any existing error
            })
            .addCase(fetchPromisedata.pending, (state) => {
                state.loading = true; // Set loading to true while fetching data
            })
            .addCase(fetchPromisedata.rejected, (state) => {
                state.loading = false; // Set loading to false if fetching fails
                state.error = 'Something went wrong'; // Set error message
            });
    }
});

export default getData.reducer;
