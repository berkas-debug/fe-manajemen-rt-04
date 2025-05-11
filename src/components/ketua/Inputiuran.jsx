import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datawarga, ambildataahliwaris, inputiuran } from '../../store/actions/scope.actions';

const Inputiuran = () => {
    const dispatch = useDispatch();
    const { dataahliwaris, datauser } = useSelector((state) => state.scopeall);

    const [formData, setFormData] = useState({
        id_warga: '',
        id_ahli_waris: '',
        tahun: new Date().getFullYear().toString(),
    });


    useEffect(() => {
        dispatch(datawarga());
        dispatch(ambildataahliwaris());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(inputiuran(formData));
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">Pembayaran Iuran</h2>

            <div className="form-group">
                <label>Tahun</label>
                <input
                    type="number"
                    name="tahun"
                    value={formData.tahun}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Nama Warga</label>
                <select
                    name="id_warga"
                    value={formData.id_warga}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Pilih Warga --</option>
                    {datauser?.map(w => (
                        <option key={w.id} value={w.id}>{w.nama}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Nama Ahli Waris</label>
                <select
                    name="id_ahli_waris"
                    value={formData.id_ahli_waris}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Pilih Ahli Waris --</option>
                    {dataahliwaris?.map(aw => (
                        <option key={aw.id} value={aw.id}>{aw.nama}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className="submit-btn">Simpan Iuran</button>
        </form>

    );
};

export default Inputiuran;
