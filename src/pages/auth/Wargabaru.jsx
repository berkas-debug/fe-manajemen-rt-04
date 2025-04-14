import React, { useState } from 'react'
import Footer from '../../components/Layousts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../store/actions/alldata.actions';

function Wargabaru() {
    const [credentials, setCredentials] = useState({ key1: '', key2: '' });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth(credentials));
        setCredentials({ key1: '', key2: '' });
    };
    const { login } = useSelector(state => state.auth);
    const username = login?.message;

    return (
        <div className="login-page">
            <div className="login-box center-screen">
                <h2>Login {username}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nomor Pengguna</label>
                    <input
                        type="text"
                        name="key1"
                        placeholder="Masukkan email"
                        value={credentials.key1}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name='key2'
                        placeholder="Masukkan password"
                        value={credentials.key2}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name='key2'
                        placeholder="Masukkan password"
                        value={credentials.key2}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name='key2'
                        placeholder="Masukkan password"
                        value={credentials.key2}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name='key2'
                        placeholder="Masukkan password"
                        value={credentials.key2}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Wargabaru;