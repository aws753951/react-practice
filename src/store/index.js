import { configureStore } from "@reduxjs/toolkit";
import {
    carReducer,
    changeSearchTerm,
    addCar,
    removeCar,
} from "./slices/carsSlice";

import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        form: formReducer,
    },
});

// 從store導出，就不用透過slice了
export { store, changeSearchTerm, addCar, removeCar, changeName, changeCost };
