// redux toolkit eto vspomogatel'nyj modul' dlja redux. On uproshajet ispolzovanija 4istogo redux
// Redux eto modul kotorqj hranit i peredajot glabal'nyj state prilozhenija
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// Kak i useState u state dolzhno bqt' pervonachalnoje sostojanie ili znachenija po defoultu
const initialState = {
    countryId: "",
    numberOf: "",
    theme: "light",
};

// createAction objevljajet action funkcqju kotoruju my budem ispolzovat' dlja izmenenija redux state.
export const setCountryId = createAction("setCountryId");
export const setNumberOf = createAction("setNumberOf");
export const setTheme = createAction("setTheme");

//Редуктор (reducer) — это чистая функция, которая вычисляет 
//следующее состояние дерева на основании его предыдущего 
//состояния(initialState) и применяемого действия(action).

const reducer = createReducer(initialState, {
    [setCountryId]: (state, action) => {
        state.countryId = action.payload;
    },
    [setNumberOf]: (state, action) => {
        state.numberOf = action.payload;
    },
    [setTheme]: (state, action) => {
        state.theme = action.payload;
    },
});
// Sozdajot hranilishe v kotorom soderzhqtsa sostjonije prilozhenija, kotoroje my
// mozhem kontrolirovat' cherez action
// hranilishem nuzhno obernut' vsjo nashe prilozhenije v index.js
export const store = configureStore({
    reducer,
});
