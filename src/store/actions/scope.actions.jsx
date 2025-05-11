import { actionTypes } from "../actionsTypes";
const baseUrl = import.meta.env.VITE_BASE_URL;

// Melakukan pemanggilan data warga
export function datawarga() {
    return async dispatch => {
        dispatch({ type: actionTypes.DATA_WARGA_REQUEST })
        try {
            const response = await fetch(`${baseUrl}user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },

            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            dispatch({ type: actionTypes.DATA_WARGA_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: actionTypes.DATA_WARGA_FAILURE, payload: error.message })
        }
    }
}

// pengambilan data ahliwaris
export function ambildataahliwaris() {
    return async dispatch => {
        dispatch({ type: actionTypes.AMBIL_AHLI_WARIS_REQUEST });

        try {
            const response = await fetch(`${baseUrl}ahliwaris`, { // ganti endpoint sesuai kebutuhan
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            dispatch({
                type: actionTypes.AMBIL_AHLI_WARIS_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.AMBIL_AHLI_WARIS_FAILURE,
                payload: error.message
            });
        }
    }
}

// pengambilan data iuran
export function ambildataiuran(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.AMBIL_DATA_IURAN_REQUEST });
        try {
            const response = await fetch(`${baseUrl}iuran/${params}`, { // ganti endpoint sesuai kebutuhan
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();

            dispatch({
                type: actionTypes.AMBIL_DATA_IURAN_SUCCESS,
                payload: res
            });
        } catch (error) {
            dispatch({
                type: actionTypes.AMBIL_DATA_IURAN_FAILURE,
                payload: error.message
            });
        }
    }
}

// pengambilan data minta surat
export function ambilDataMintaSurat() {
    return async dispatch => {
        dispatch({ type: actionTypes.AMBIL_DATA_MINTA_SURAT_REQUEST });
        try {
            const response = await fetch(`${baseUrl}mintasurat/ambil`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }

            const res = await response.json();


            dispatch({
                type: actionTypes.AMBIL_DATA_MINTA_SURAT_SUCCESS,
                payload: res
            });
        } catch (error) {
            dispatch({
                type: actionTypes.AMBIL_DATA_MINTA_SURAT_FAILURE,
                payload: error.message
            });
        }
    }
}

// pengambilan data berita
export function tampilBerita() {
    return async dispatch => {
        dispatch({ type: actionTypes.TAMPIL_BERITA_REQUEST });
        try {
            const response = await fetch(`${baseUrl}kirim/ambil`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }

            const res = await response.json();

            dispatch({
                type: actionTypes.TAMPIL_BERITA_SUCCESS,
                payload: res
            });
        } catch (error) {
            dispatch({
                type: actionTypes.TAMPIL_BERITA_FAILURE,
                payload: error.message
            });
        }
    }
}


export function inputAhliWarisbaru(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.INPUT_AHLI_WARIS_BARU_REQUEST });
        try {
            const response = await fetch(`${baseUrl}ahliwaris/tambah`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }

            const res = await response.json();

            dispatch({
                type: actionTypes.INPUT_AHLI_WARIS_BARU_SUCCESS,
                payload: res
            });
        } catch (error) {
            dispatch({
                type: actionTypes.INPUT_AHLI_WARIS_BARU_FAILURE,
                payload: error.message
            });
        }
    }
}

export const handleSubmit = async (id, statusBaru) => {
    try {
        const response = await fetch(`${baseUrl}mintasurat/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: statusBaru }),
        });

        if (!response.ok) {
            throw new Error('Gagal mengupdate status');
        }

        const res = await response.json();
        console.log('data be', res);
        
        // bisa tambahkan callback untuk refresh data
    } catch (error) {
        alert(error.message);
    }
};

// Untuk input surat baru
export function inputmintasuratbaru(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.INPUT_AHLI_WARIS_REQUEST });
        try {
            const response = await fetch(`${baseUrl}mintasurat/input`, { // ganti endpoint jika perlu
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();

            dispatch({ type: actionTypes.INPUT_AHLI_WARIS_SUCCESS, payload: res });
        } catch (error) {
            dispatch({ type: actionTypes.INPUT_AHLI_WARIS_FAILURE, payload: error.message });
        }
    }
}


// Untuk input iuran
export function inputiuran(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.INPUT_IURAN_REQUEST });
        try {
            const response = await fetch(`${baseUrl}iuran/input`, { // ganti endpoint jika perlu
                method: 'POST', // ganti method sesuai respon
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            console.log('res', res);

            dispatch({ type: actionTypes.INPUT_IURAN_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.INPUT_IURAN_FAILURE, payload: error.message });
        }
    }
}

// Sebagai input untuk berita
export function berita(params) {databerita
    return async dispatch => {
        dispatch({ type: actionTypes.KIRIM_NOTIF_REQUEST, })
        try {
            const response = await fetch(`${baseUrl}kirim`, {
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
            // if (res.okey) {
            //     window.location.href("/dashboard");
            // } else {
            //     ''
            // }
            dispatch({ type: actionTypes.KIRIM_NOTIF_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: actionTypes.KIRIM_NOTIF_FAILURE, payload: error.message })
        }
    }
}
