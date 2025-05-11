import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputmintasuratbaru } from '../../store/actions/scope.actions';

const MintaSurat = () => {
    const dispatch = useDispatch();

    // Ambil data login dari Redux
    const { login } = useSelector(state => state.auth);
    const keyw = login?.keyw;

    // State form
    const [formData, setFormData] = useState({
        id_warga: '',
        nama: '',
        alamat: '',
        perihal_surat: ''
    });

    // Isi id_warga setelah keyw tersedia dari Redux
    useEffect(() => {
        if (keyw) {
            setFormData(prev => ({
                ...prev,
                id_warga: keyw
            }));
        }
    }, [keyw]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kirim data ke Redux action
        dispatch(inputmintasuratbaru(formData));
        

        // Reset form (tapi tetap pertahankan id_warga)
        setFormData({
            id_warga: keyw,
            nama: '',
            alamat: '',
            perihal_surat: ''
        });
    };

    return (
        <div className="login-page">
            <div className="login-box center-screen">
                <h2>Minta Surat</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">Nama</label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="border px-2 py-1 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block">Alamat</label>
                        <input
                            type="text"
                            name="alamat"
                            value={formData.alamat}
                            onChange={handleChange}
                            className="border px-2 py-1 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block">Perihal Surat</label>
                        <input
                            type="text"
                            name="perihal_surat"
                            value={formData.perihal_surat}
                            onChange={handleChange}
                            className="border px-2 py-1 w-full"
                            required
                        />
                    </div>

                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MintaSurat;
