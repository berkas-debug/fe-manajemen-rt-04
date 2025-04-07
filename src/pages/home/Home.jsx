
import Card from '../../components/Fungsi/Card';
// import { useParams } from 'react-router-dom';
import { FcMoneyTransfer, FcSurvey, FcInvite, FcConferenceCall, FcExport, FcFaq } from "react-icons/fc";
import { useSelector } from 'react-redux';

function Home() {
  const { login } = useSelector(state => state.auth);
const username = login?.username;
  const handleLogout = () => {
    localStorage.clear()
    window.location.replace('/'); // redirect ke halaman login
  };
  
  return (
    <div className='content'>
      <h1>Selamat Datang {username}</h1>
      <div style={{ display: 'flex', height: 'auto', justifyContent: 'center'  }}>
        <Card
          Icon={FcFaq}
          color={"#27ae60"}
          title="Buat Berita"
          description="Membuat Kabar Baru."
          href="/halaman-tujuan"
        />
        <Card
          Icon={FcConferenceCall}
          color={"#27ae60"}
          title="Data Warga"
          description="Data Para Warga."
          href="/halaman-tujuan"
        />
        <Card
          Icon={FcInvite}
          color={"#27ae60"}
          title="Permintaan Surat"
          description="Permintaan Surat Dari Warga Kepada Ketua RT."
          href="/halaman-tujuan"
        />
      </div>
    
      <div style={{ display: 'flex', height: 'auto', justifyContent: 'center'  }}>
        <Card
          Icon={FcMoneyTransfer}
          color={"#27ae60"}
          title="Iuran Warga"
          description="Membuat dan Mencatat Yang Telah Membayar Iuran."
          href="/halaman-tujuan"
        />
        <Card
          Icon={FcSurvey}
          color={"#27ae60"}
          title="Laporan Iuran"
          description="Laporan Dari Iuran Warga."
          href="/halaman-tujuan"
        />
        <Card
          Icon={FcExport}
          color={"#27ae60"}
          title="Keluar"
          description=""
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Home;