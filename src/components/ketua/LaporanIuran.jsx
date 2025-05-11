import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ambildataiuran } from '../../store/actions/scope.actions';
import { useParams } from 'react-router-dom';

function LaporanIuran() {
    const { tahun } = useParams();
    const dispatch = useDispatch();
    const { dataiuran } = useSelector((state) => state.scopeall);

    useEffect(() => {
        dispatch(ambildataiuran(tahun));
    }, [dispatch, tahun]);

    return dataiuran ? (
        <div style={{ padding: '20px' }}>
            <h2 className="text-xl font-bold mb-4">Tahun: {dataiuran.tahun}</h2>
            <div style={{ overflowX: 'auto' }}>
                <table className="table-standard">
                    <thead>
                        <tr>
                            <th>Nama Warga</th>
                            {dataiuran.ahliwaris?.map((ahli, idx) => (
                                <th key={idx}>{ahli}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dataiuran.data?.map((warga, idx) => (
                            <tr key={idx}>
                                <td>{warga.nama}</td>
                                {dataiuran.ahliwaris?.map((ahli, i) => (
                                    <td key={i}>
                                        {warga.iuran[ahli] !== null
                                            ? `Rp${warga.iuran[ahli].toLocaleString()}`
                                            : '-'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        <div style={{ padding: '20px' }}>Loading...</div>
    );
}

export default LaporanIuran;
