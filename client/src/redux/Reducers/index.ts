import RegionReducer from "./regionReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    regions: RegionReducer,
});

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U: never
export type InferActionTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>


export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
