import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    joke: "no joke"
}



const fetchjoke = createAsyncThunk("joke/fetchJoke", async function (cate) {
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${cate}`);
        return response.data.value;
    } catch (error) {
        alert("Error fetching joke:", error);
        return `catagory => animal / career / celebrity / dev / explicit / fashion / food / history / money / movie / music / political / religion / science / sport / travel`; // Return a default error message
    }
});

const jokeSlice = createSlice({
    name: "joke",
    initialState,
    reducers: {
    },
    extraReducers: function (build) {
        build.addCase(fetchjoke.pending, function () { console.log("Loading....") })
            .addCase(fetchjoke.fulfilled, function (state, actions) {
                state.joke = actions.payload
            })
    }
})

export default jokeSlice
const { setjoke } = jokeSlice.actions
export { fetchjoke }
