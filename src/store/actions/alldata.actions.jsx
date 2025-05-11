import { actionTypes } from "../actionsTypes";
import Swal from 'sweetalert2'
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
                credentials: 'include',
                body: JSON.stringify(params)
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            if (res.success) {
                window.location.replace("/dashboard");
            } else {
                Swal.fire({
                    title: 'Gagal',
                    text: res.message,
                    icon: 'info',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = '/';
                });
            }
            dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res })
        } catch (error) {
            dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error.message })
        }
    }
}

export function wargabaru(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.LOGIN_REQUEST, payload: params })
        try {

            const response = await fetch(`${baseUrl}auth/wargabaru`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
        } catch (error) {
            dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error })
        }
    }
}
