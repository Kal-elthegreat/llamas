import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { llamasReducer } from "./llamasReducer";
import { composeWithDevTools } from '@redux-devtools/extension';



export const llamasStore =
createStore(llamasReducer,composeWithDevTools(applyMiddleware(thunk)));