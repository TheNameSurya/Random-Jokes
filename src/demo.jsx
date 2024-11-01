import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    joke: "no joke"
}

// Function to fetch categories
const fetchCategories = async () => {
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/categories`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}



const jokeSlice = createSlice({
    name: "joke",
    initialState,
    reducers: {
        setJoke: (state, action) => {
            state.joke = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchjoke.pending, () => { console.log("Loading....") })
            .addCase(fetchjoke.fulfilled, (state, action) => {
                state.joke = action.payload;
            })
            .addCase(fetchjoke.rejected, (state) => {
                state.joke = "Failed to fetch a joke"; // Handle rejected case
            });
    }
});

export const { setJoke } = jokeSlice.actions;
export const { fetchCategories } = fetchCategories; // Export fetchCategories if needed
export default jokeSlice.reducer;