import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputAhliWarisbaru } from '../../store/actions/scope.actions';

const InputAhliwaris = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        nama: '',
        nominaliuran: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(inputAhliWarisbaru(formData));
        setFormData({
            nama: '',
            nominaliuran: ''
        });
    };

    return (
        <div className="login-page">
            <div className="login-box center-screen">
                <h2>Ahli Waris Baru</h2>
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
                        <label className="block">Nominal Iuran</label>
                        <input
                            type="text"
                            name="nominaliuran"
                            value={formData.nominaliuran}
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
}

export default InputAhliwaris;
