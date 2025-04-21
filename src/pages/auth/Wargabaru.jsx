import React, { useState } from 'react'
import Footer from '../../components/Layousts/Footer';
import { useDispatch } from 'react-redux';
import { wargabaru } from '../../store/actions/alldata.actions';

function Wargabaru() {
    const [credentials, setCredentials] = useState({ key1: '', key2: '', key3: '', key4: '', key5: '' });
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(wargabaru(credentials));
        setCredentials({ key1: '', key2: '', key3: '', key4: '', key5: '' });
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

                    <label>No HP</label>
                    <input
                        type="text"
                        name='key3'
                        placeholder="Masukan No HP"
                        value={credentials.key3}
                        onChange={handleChange}
                        required
                    />

                    <label>Nama Untuk Login</label>
                    <input
                        type="text"
                        name='key4'
                        placeholder="Masukkan Tanda Pengenal Saat Masuk"
                        value={credentials.key4}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="key5"
                            placeholder="Masukkan Password"
                            value={credentials.key5}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', paddingRight: '30px' }} // supaya gak ketiban icon
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '30%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: '#888',
                                fontSize: '18px'
                            }}
                        >
                            {showPassword ? '🕶️' : '👁️'}
                        </span>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Wargabaru;