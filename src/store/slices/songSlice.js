import { createSlice } from "@reduxjs/toolkit";
const songSlice = createSlice({
    name: "song", // 這個不重要，識別用的
    initialState: ["initial value"],
    reducers: {},
});

export { songSlice };
