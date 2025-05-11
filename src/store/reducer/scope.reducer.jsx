import { actionTypes } from "../actionsTypes";

const initState = {
    datauser: [],
    datakirim: [],
    inputiuran: [],
    dataahliwaris: [],
    dataiuran: null,
    datamintasurat: null,
    databerita:null,
    dataahliwarisbaru: [],
    loading: false,
    error: null
}

const scopedatas = (state = initState, action) => {
    switch (action.type) {
        // Data Warga
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

        // Data Ahli Waris
        case actionTypes.AMBIL_AHLI_WARIS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AMBIL_AHLI_WARIS_SUCCESS:
            return {
                ...state,
                loading: false,
                dataahliwaris: action.payload
            };
        case actionTypes.AMBIL_AHLI_WARIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // Mengirim Notif
        case actionTypes.KIRIM_NOTIF_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.KIRIM_NOTIF_SUCCESS:
            return {
                ...state,
                loading: false,
                datakirim: action.payload
            };
        case actionTypes.KIRIM_NOTIF_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // Menginput iuran
        case actionTypes.INPUT_IURAN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.INPUT_IURAN_SUCCESS:
            return {
                ...state,
                loading: false,
                inputiuran: action.payload
            };
        case actionTypes.INPUT_IURAN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // Mengambil data iuran
        case actionTypes.AMBIL_DATA_IURAN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AMBIL_DATA_IURAN_SUCCESS:
            return {
                ...state,
                loading: false,
                dataiuran: action.payload
            };
        case actionTypes.AMBIL_DATA_IURAN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // Menginput data ahli waris
        case actionTypes.INPUT_AHLI_WARIS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.INPUT_AHLI_WARIS_SUCCESS:
            return {
                ...state,
                loading: false,
                dataahliwaris: action.payload
            };
        case actionTypes.INPUT_AHLI_WARIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        // Tambahan baru untuk AHLI_WARIS_BARU
        case actionTypes.INPUT_AHLI_WARIS_BARU_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.INPUT_AHLI_WARIS_BARU_SUCCESS:
            return {
                ...state,
                loading: false,
                dataahliwarisbaru: action.payload
            };
        case actionTypes.INPUT_AHLI_WARIS_BARU_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // data minta surat
        case actionTypes.AMBIL_DATA_MINTA_SURAT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AMBIL_DATA_MINTA_SURAT_SUCCESS:
            return {
                ...state,
                loading: false,
                datamintasurat: action.payload
            };
        case actionTypes.AMBIL_DATA_MINTA_SURAT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };// tampil berita
        case actionTypes.TAMPIL_BERITA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.TAMPIL_BERITA_SUCCESS:
            return {
                ...state,
                loading: false,
                databerita: action.payload
            };
        case actionTypes.TAMPIL_BERITA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        // tampil berita
        case actionTypes.TAMPIL_BERITA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.TAMPIL_BERITA_SUCCESS:
            return {
                ...state,
                loading: false,
                databerita: action.payload
            };
        case actionTypes.TAMPIL_BERITA_FAILURE:
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