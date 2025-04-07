import { actionTypes } from "../actionsTypes";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function auth(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.LOGIN_REQUEST, payload: params })
        try {
            
            const response = await fetch(`${baseUrl}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            console.log("ini",res);
            if (res.success) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.replace("/dashboard");
            } else {
                console.error("Data yang diterima tidak lengkap:", res);
            }
            dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res })
        } catch (error) {
            dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error.message })
        }
    }
}
