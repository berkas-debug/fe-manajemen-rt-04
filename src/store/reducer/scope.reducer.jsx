import { actionTypes } from "../actionsTypes";

const initState = {
    datauser: [],
    loading: false,
    error: null
}

const scopedatas = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.DATA_WARGA_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.DATA_WARGA_SUCCESS:
            return {
                ...state,
                loading: false,
                datauser: action.payload
            };

        case actionTypes.DATA_WARGA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};


export default scopedatas;