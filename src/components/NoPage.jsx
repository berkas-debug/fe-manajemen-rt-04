import React from 'react'
import { Link } from 'react-router-dom';

function NoPage() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-message">Oops! Halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/dashboard" className="back-home-button">
                Kembali ke Beranda
            </Link>
        </div>
    );  
}

export default NoPage;