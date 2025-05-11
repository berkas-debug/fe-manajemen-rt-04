import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tampilBerita } from '../../store/actions/scope.actions';
import { useNavigate } from 'react-router-dom';

const HalamanAwal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { databerita } = useSelector((state) => state.scopeall);

    useEffect(() => {
        dispatch(tampilBerita());
    }, [dispatch]);

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="halaman-berita">
            <div className="login-button-container">
                <button className="login-button" onClick={handleLogin}>Masuk</button>
            </div>

            <h2>Daftar Berita</h2>
            <div className="berita-list">
                {databerita?.data?.map((item) => (
                    <div key={item.id} className="berita-item">
                        <div className="berita-teks">{item.berita}</div>
                        <div className="berita-tanggal">
                            {new Date(item.createdAt).toLocaleString('id-ID', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HalamanAwal;
