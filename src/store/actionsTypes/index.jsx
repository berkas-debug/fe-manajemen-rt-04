import { allActionTypes } from "./alldata.actionTypes";
import { scopeActionTypes } from "./scope.actionTypes";

export const actionTypes = {
    ...allActionTypes,
    ...scopeActionTypes
}