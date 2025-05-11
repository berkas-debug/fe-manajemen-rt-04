import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Cekdua = ({children}) => {
    const { login } = useSelector(state => state.auth);
    const cek = login?.role
    const key = login?.key

    return cek === key ? <Navigate to='/notfound' replace></Navigate> : children
}

export default Cekdua;