import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Cek = ({children}) => {
    const { login } = useSelector(state => state.auth);
    const cek = login?.role
    const key = login?.key

    return cek === key ? children : <Navigate to='/notfound' replace></Navigate>
}

export default Cek;