import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./action";

// 你想要存入那些stateSlice
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// 確保都是由store產出
export { reset, store, addSong, removeSong, addMovie, removeMovie };
