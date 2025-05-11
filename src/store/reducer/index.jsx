import { combineReducers } from "redux";
import datas from "./alldata.reducer";
import scopedatas from "./scope.reducer";

const appReducer = combineReducers({
    auth: datas,
    scopeall: scopedatas
})

const rootReducer = (state, action) => appReducer(state, action)
export default rootReducer