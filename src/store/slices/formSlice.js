import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name: "form",

    // 追蹤兩個狀態
    initialState: {
        name: "",
        cost: 0,
    },

    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = "";
            state.cost = 0;
        });
    },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer; // one single combine reducer
