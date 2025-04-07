import { actionTypes } from "../actionsTypes";

const initState = {
    datauser: [],
    loading: false,
    error: null
}

const scopedatas = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.WARGA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.WARGA_SUCCESS:
            return {
                ...state,
                loading: false,
                datauser: action.payload
            }
        case actionTypes.WARGA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default scopedatas;