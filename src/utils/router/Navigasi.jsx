import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Layouts from '../../pages/Layouts'
import Home from '../../pages/home/Home'
import NoPage from '../../components/NoPage'
import Wargabaru from '../../pages/auth/Wargabaru'
import Datawarga from '../../components/ketua/Datawarga'
import PrivateRoute from './PrivateRoute'
import Cek from './NotFount'
import Cek2 from './Cek2'
// import QRComponent from '../../components/Wa (tidak bisa)/Wacomponen'
import SendMessageForm from '../../components/Wa (tidak bisa)/Kirimpesan'
import Inputiuran from '../../components/ketua/Inputiuran'
import LaporanIuran from '../../components/ketua/LaporanIuran'
import InputAhliwaris from '../../components/ketua/InputAhliwaris'
import MintaSurat from '../../components/warga/MintaSurat'
import DataPermintaanSurat from '../../components/ketua/DataPermintaanSurat'
import Cekdua from './NotFountdua'
import Tahuniuran from '../../components/ketua/Tahuniuran'
import HalamanAwal from '../../pages/home/HalamanAwal'

function Navigasi() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={
              <HalamanAwal />
          } />
          <Route path='login' element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          } />
          <Route path='wargabaru' element={
            <Wargabaru />
          } />
          {/* <Route path='qr' element={<QRComponent/>}/> */}
          <Route path='kirimpesan' element={<SendMessageForm/>}/>
          <Route path='dashboard' element={
            <Cek2>
              <Home />
            </Cek2>
          } />
          <Route path='semua-warga' element={
              <Cek>
                <Datawarga />
              </Cek>
          } />
          <Route path='laporan' element={
              <Cek>
                <Tahuniuran />
              </Cek>
          } />
          <Route path='laporan/:tahun' element={
              <Cek>
                <LaporanIuran />
              </Cek>
          } />
          <Route path='pendataan-iuran' element={
              <Cek>
                <Inputiuran />
              </Cek>
          } />
          <Route path='tambah-ahli-waris' element={
              <Cek>
                <InputAhliwaris />
              </Cek>
          } />
          <Route path='buat-berita' element={
              <Cek>
                <SendMessageForm />
              </Cek>
          } />
          <Route path='minta-surat' element={
              <Cekdua>
                <MintaSurat />
              </Cekdua>
          } />
          <Route path='data-minta-surat' element={
              <Cek>
                <DataPermintaanSurat />
              </Cek>
          } />
          <Route path='notfound' element={
            <Cek2>
              <NoPage />
            </Cek2>
          } />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Navigasi