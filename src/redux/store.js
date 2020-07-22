import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleWare from "redux-thunk";
import employeesReducer from "./employeesReducer";


let rootReducer = combineReducers({
 employees: employeesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

window.store = store