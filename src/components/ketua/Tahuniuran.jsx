import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tahuniuran = () => {
    const [tahun, setTahun] = useState(new Date().getFullYear().toString());
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tahun) {
            navigate(`/laporan/${tahun}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-tahun">
            <label>Masukkan Tahun:</label>
            <input
                type="number"
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                required
            />
            <button type="submit">Lihat Laporan</button>
        </form>
    );
}

export default Tahuniuran;
