import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { reset } from "./action";

const store = configureStore({
    reducer: {
        songs: songReducer,
    },
});

export { reset, store, addSong, removeSong }; // 給index.js + component使用
