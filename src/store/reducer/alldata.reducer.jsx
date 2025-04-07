import { actionTypes } from "../actionsTypes";

const initState = {
    login: [],
    loading: false,
    error: null
}

const datas = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                login: action.payload
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default datas;