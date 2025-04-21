// untuk mengetahui apakah sudah login atau belum

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { login } = useSelector(state => state.auth);
    const soeps = login?.success;

    return soeps ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
