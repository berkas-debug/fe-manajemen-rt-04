import React, { useState } from 'react'
import Footer from '../../components/Layousts/Footer';
import { useDispatch } from 'react-redux';
import { wargabaru } from '../../store/actions/alldata.actions';

function Wargabaru() {
    const [credentials, setCredentials] = useState({ key1: '', key2: '', key3: '' });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(wargabaru(credentials));
        setCredentials({ key1: '', key2: '', key3: ''});
    };

    return (
        <div className="login-page">
            <div className="login-box center-screen">
                <h2>Warga Baru</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nama Warga</label>
                    <input
                        type="text"
                        name="key1"
                        placeholder="Masukkan Nama Warga"
                        value={credentials.key1}
                        onChange={handleChange}
                        required
                    />

                    <label>Alamat</label>
                    <input
                        type="text"
                        name='key2'
                        placeholder="Masukan Alamat"
                        value={credentials.key2}
                        onChange={handleChange}
                        required
                    />

                    <label>No HP (Contoh : 08123456789)</label>
                    <input
                        type="text"
                        name='key3'
                        placeholder="Masukan No HP"
                        value={credentials.key3}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Wargabaru;