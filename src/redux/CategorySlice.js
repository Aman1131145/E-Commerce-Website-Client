import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosClient";

export const fetchCategories = createAsyncThunk("api/categories", async () => {
    try {
        const response = await axiosClient.get("/categories?populate=image");
        return response.data.data;
    } catch (e) {
        return Promise.reject(e);
    }
});

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        categories: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    },
});


export default categorySlice.reducer;