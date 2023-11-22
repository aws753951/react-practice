import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "./slices/songSlice";

const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
    },
});

export { store };
