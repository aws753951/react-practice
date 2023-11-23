import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";
const songSlice = createSlice({
    name: "song", // 這個不重要，識別用的
    initialState: ["initial value"],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const removedIndex = state.indexOf(action.payload);
            state.splice(removedIndex, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    },
});

export const songReducer = songSlice.reducer; // 給store作成reducer用
export const { addSong, removeSong } = songSlice.actions; // 給要使用的component使用，但會集中在store裡面
