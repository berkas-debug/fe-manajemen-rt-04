import React, { useState } from 'react';
import Footer from '../../components/Layousts/Footer';
import { useDispatch, /* useSelector */ } from 'react-redux';
import auth from '../../store/actions/alldata.actions';

function Login() {
  const [credentials, setCredentials] = useState({ key1: '', key2: '' });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(auth(credentials));

    setCredentials({ key1: '', key2: '' });
  };
  

  return (
    <div className="login-page spasion">
      <div className="login-box center-screen">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Nomor Pengguna</label>
          <input
            type="text"
            name="key1"
            placeholder="Masukkan email"
            value={credentials.key1}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="key2"
              placeholder="Masukkan password"
              value={credentials.key2}
              onChange={handleChange}
              required
              style={{ width: '100%', paddingRight: '30px' }} // supaya gak ketiban icon
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '30%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#888',
                fontSize: '18px'
              }}
            >
              {showPassword ? '🕶️' : '👁️'}
            </span>
          </div>



          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
