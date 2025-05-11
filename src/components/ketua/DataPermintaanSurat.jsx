import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ambilDataMintaSurat, handleSubmit } from '../../store/actions/scope.actions';

const DataPermintaanSurat = () => {
    const dispatch = useDispatch();
    const { datamintasurat } = useSelector((state) => state.scopeall);


    useEffect(() => {
        dispatch(ambilDataMintaSurat());
    }, [dispatch]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Data Minta Surat</h2>
            <div style={{ overflowX: 'auto' }}>
                <table className="table-standard">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Perihal Surat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datamintasurat?.data?.length > 0 ? (
                                datamintasurat?.data?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                        <td>{item.perihal_surat}</td>
                                        <td>
                                            {item.status === null ? (
                                                <button
                                                    className="btn proses"
                                                    onClick={() => handleSubmit(item.id, false)}
                                                >
                                                    Butuh di Proses
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn selesai"
                                                    onClick={() => handleSubmit(item.id, true)}
                                                >
                                                    Klik Jika Surat Sudah Selesai
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Tidak Ada Data</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataPermintaanSurat;
