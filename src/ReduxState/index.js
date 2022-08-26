import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const initialState = {
    countryId: "",
};

export const setCountryId = createAction("setCountryId");

const reducer = createReducer(initialState, {
    [setCountryId]: (state, action) => {
        state.countryId = action.payload;
    }
});

export const store = configureStore({
    reducer,
});
