import {combineReducers, createStore} from 'redux';
import * as reducers from "./exports";

const store = createStore(combineReducers(reducers));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;