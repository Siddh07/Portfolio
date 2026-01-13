import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./githubApi";



export const store = configureStore({   //middleware bring in the repo from api request
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer, //reducer is the repo
    },
    middleware: (get) => get().concat(githubApi.middleware),
});