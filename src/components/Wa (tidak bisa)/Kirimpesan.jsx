import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { berita } from '../../store/actions/scope.actions';

export default function SendMessageForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        pesan: '',
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
        dispatch(berita(formData));
        // alertify.success('Data telah disimpan!');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Kabar Berita Baru</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="pesan"
                    placeholder="Pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    className="textarea"
                />
                <br />
                <button type="submit" className="submit-button">Kirim</button>
            </form>
        </div>
    );
}
