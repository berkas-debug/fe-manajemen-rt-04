import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {datawarga} from '../../store/actions/scope.actions';

function Datawarga() {
    const dispatch = useDispatch();
    const { datauser } = useSelector((state) => state.scopeall);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        if (!isFetched) {
            dispatch(datawarga());
            setIsFetched(true);
        }
    }, [dispatch, isFetched]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Data Warga</h2>
            <div style={{ overflowX: 'auto' }}>
                <table className="table-standard">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>No HP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datauser.length > 0 ? (
                                datauser.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                        <td>{item.no_hp}</td>


                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Tidak Ada Data</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Datawarga;
