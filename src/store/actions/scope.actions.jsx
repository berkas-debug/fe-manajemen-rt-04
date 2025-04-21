import { actionTypes } from "../actionsTypes";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function datawarga() {
    return async dispatch => {
        dispatch({ type: actionTypes.DATA_WARGA_REQUEST})
        try {
            
            const response = await fetch(`${baseUrl}user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            if (res.okey) {
                window.location.href("/dashboard");
            } else {
                ''
            }
            dispatch({ type: actionTypes.DATA_WARGA_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: actionTypes.DATA_WARGA_FAILURE, payload: error.message })
        }
    }
}
