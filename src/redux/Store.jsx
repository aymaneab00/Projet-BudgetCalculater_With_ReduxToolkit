import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DepenseSlicer from "./DepenseSlicer";

const reducer = combineReducers (
    {
        depenses: DepenseSlicer
    }
)
const store = configureStore({reducer})
export default store 