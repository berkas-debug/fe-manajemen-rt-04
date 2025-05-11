import { useEffect, useState } from 'react';

export default function QRComponent() {
    const [qr, setQr] = useState(null);

    useEffect(() => {
        const fetchQr = async () => {
            const res = await fetch('http://202.10.42.89:3001/qr/apa');
            const data = await res.json();
            setQr(data.qr);
        };

        fetchQr();

        // Poll QR setiap 10 detik (opsional)
        const interval = setInterval(fetchQr, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Hehehe</h2>
            {qr ? <img src={qr} alt="QR Code" /> : <p>Loading QR Code...</p>}
        </div>
    );
}
