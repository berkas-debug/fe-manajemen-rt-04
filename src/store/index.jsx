// store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CryptoJS from "crypto-js";
import rootReducer from "./reducer";


const secretKey = import.meta.env.VITE_SECRETKEY;

// Custom encrypt/decrypt transform
const encryptTransform = {
    // eslint-disable-next-line no-unused-vars
    in: (inboundState, key) => {
        try {
            const encrypted = CryptoJS.AES.encrypt(JSON.stringify(inboundState), secretKey).toString();
            return encrypted;
        } catch (e) {
            console.error("Encrypt error", e);
            return inboundState;
        }
    },
    // eslint-disable-next-line no-unused-vars
    out: (outboundState, key) => {
        try {
            const bytes = CryptoJS.AES.decrypt(outboundState, secretKey);
            const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decrypted;
        } catch (e) {
            console.error("Decrypt error", e);
            return outboundState;
        }
    },
};

const persistConfig = {
    key: "keyday",
    storage,
    whitelist: ['auth'],
    transforms: [encryptTransform], // gunakan transform custom kita
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
