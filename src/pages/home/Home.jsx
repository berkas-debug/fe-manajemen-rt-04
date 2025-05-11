
import Card from '../../components/Fungsi/Card';
// import { useParams } from 'react-router-dom';
import { FcAddRow, FcMoneyTransfer, FcSurvey, FcInvite, FcConferenceCall, FcExport, FcFaq } from "react-icons/fc";
import { useSelector } from 'react-redux';

function Home() {
  const { login } = useSelector(state => state.auth);
  const username = login?.username;
  const role = login?.role;
  const key = login?.key;
  const handleLogout = () => {
    localStorage.removeItem("persist:keyday");
    window.location.replace("/");
  };

  return (
    <>
    <div className='content'>
      <h1>Selamat Datang {username}</h1>
      {role === key ?
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center' }}>
          <Card
            Icon={FcFaq}
            color={"#27ae60"}
            title="Buat Berita"
            description="Membuat Kabar Baru."
            href="/buat-berita"
          />
          <Card
            Icon={FcConferenceCall}
            color={"#27ae60"}
            title="Data Warga"
            description="Data Para Warga."
            href="/semua-warga"
          />
          <Card
            Icon={FcInvite}
            color={"#27ae60"}
            title="Permintaan Surat"
            description="Permintaan Surat Dari Warga Kepada Ketua RT."
            href="/data-minta-surat"
          />
        </div>
        :
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center' }}>
          <Card
            Icon={FcSurvey}
            color={"#27ae60"}
            title="Meminta Surat RT"
            description="Membuat Surat Baru"
            href="/minta-surat"
          />
          <Card
            Icon={FcExport}
            color={"#27ae60"}
            title="Keluar"
            onClick={handleLogout}
          />
        </div>
      }

      {role === key ?
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center' }}>
          <Card
            Icon={FcAddRow}
            color={"#27ae60"}
            title="Buat Iuran Warga"
            description="Melakukan Penambahan Iuran Warga"
            href="/tambah-ahli-waris"
          />
          <Card
            Icon={FcMoneyTransfer}
            color={"#27ae60"}
            title="Iuran Warga"
            description="Membuat dan Mencatat Yang Telah Membayar Iuran."
            href="/pendataan-iuran"
          />
          <Card
            Icon={FcSurvey}
            color={"#27ae60"}
            title="Laporan Iuran"
            description="Laporan Dari Iuran Warga."
            href="/laporan"
          />
          <Card
            Icon={FcExport}
            color={"#27ae60"}
            title="Keluar"
            onClick={handleLogout}
          />
        </div>
        :
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center' }}>
          
          
        </div>
      }

    </div>
    <div className='content-max'>
      <h1>Selamat Datang {username}</h1>
      {role === key ?
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: "1rem" }}>
          <Card
            Icon={FcFaq}
            color={"#27ae60"}
            title="Buat Berita"
            description="Membuat Kabar Baru."
            href="/buat-berita"
          />
          <Card
            Icon={FcConferenceCall}
            color={"#27ae60"}
            title="Data Warga"
            description="Data Para Warga."
            href="/semua-warga"
          />
          <Card
            Icon={FcInvite}
            color={"#27ae60"}
            title="Permintaan Surat"
            description="Permintaan Surat Dari Warga Kepada Ketua RT."
            href="/data-minta-surat"
          />
        </div>
        :
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '1rem' }}>
          <Card
            Icon={FcSurvey}
            color={"#27ae60"}
            title="Meminta Surat RT"
            description="Membuat Surat Baru"
            href="/minta-surat"
          />
          <Card
            Icon={FcExport}
            color={"#27ae60"}
            title="Keluar"
            onClick={handleLogout}
          />
        </div>
      }

      {role === key ?
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '1rem' }}>
          <Card
            Icon={FcAddRow}
            color={"#27ae60"}
            title="Buat Iuran Warga"
            description="Melakukan Penambahan Iuran Warga"
            href="/tambah-ahli-waris"
          />
          <Card
            Icon={FcMoneyTransfer}
            color={"#27ae60"}
            title="Iuran Warga"
            description="Membuat dan Mencatat Yang Telah Membayar Iuran."
            href="/pendataan-iuran"
          />
          <Card
            Icon={FcSurvey}
            color={"#27ae60"}
            title="Laporan Iuran"
            description="Laporan Dari Iuran Warga."
            href="/laporan"
          />
          
        </div>
        :
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '1rem' }}>
          
          {/* <Card
            Icon={FcExport}
            color={"#27ae60"}
            title="Keluar"
            onClick={handleLogout}
          /> */}
        </div>
      }
      {role === key ?
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '1rem' }}>
          <Card
            Icon={FcExport}
            color={"#27ae60"}
            title="Keluar"
            onClick={handleLogout}
          />
        </div>
        :
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '1rem' }}>
          
        </div>
      }

    </div>
    </>
  );
}

export default Home;