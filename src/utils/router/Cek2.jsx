import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Cek2 = ({ children }) => {
    const { login } = useSelector(state => state.auth);
    const soeps = login?.success;

    return !soeps ? <Navigate to="/" replace /> : children ;
};

export default Cek2;