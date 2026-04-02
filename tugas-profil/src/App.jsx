import React from 'react';

export default function App() {
  const data = {
    nama: "Mohammed Almeerzia Ilfasya",
    kelas: "T2F",
    prodi: "Teknologi Informasi (D3)",
    domisili: "Jl. Mertojoyo Selatan Blok A. No. 9A, Merjosari, Malang.",
    tentangDiri: "Perkenalkan, nama saya Mohammed Almeerzia Ilfasya, mahasiswa program studi Diploma 3 (D3) Teknologi Informasi di Universitas Brawijaya. Saat ini saya berada di kelas T2F dan sedang menempuh pendidikan dengan penuh semangat untuk mendalami dunia teknologi yang terus berkembang pesat. Sebagai calon profesional di bidang teknologi informasi, saya memiliki minat yang besar terhadap pengembangan perangkat lunak, desain antarmuka pengguna (UI/UX), dan inovasi digital yang dapat memberikan solusi nyata bagi masyarakat. Selama masa studi, saya terus mengasah keterampilan teknis maupun soft skills melalui berbagai proyek akademik, salah satunya adalah eksplorasi pemrograman web modern menggunakan ReactJS dan Tailwind CSS. Saya percaya bahwa fondasi yang kuat dalam logika pemrograman serta pemahaman desain yang baik adalah kunci untuk menciptakan aplikasi yang tidak hanya fungsional, tetapi juga nyaman digunakan. Saya selalu terbuka terhadap tantangan baru untuk terus meningkatkan kapasitas diri di dunia teknologi."
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        
        {/* Banner */}
        <div className="h-16 bg-blue-900"></div>

        <div className="px-6 pb-6">
          {/* Foto Profil */}
          <div className="relative flex flex-col items-center -mt-8 mb-4">

            {/* ✅ FIX: inline style ditambahkan sebagai fallback jika Tailwind tidak ter-compile */}
            <div
              className="h-16 w-16 rounded-full border-2 border-white bg-white shadow-md overflow-hidden"
              style={{
                width: '64px',
                height: '64px',
                minWidth: '64px',
                minHeight: '64px',
                borderRadius: '9999px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/FOTO KTM ALMET UB.jpg"
                alt="Profil"
                className="h-full w-full object-cover object-top"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=User'; }}
              />
            </div>

            <div className="mt-2 text-center">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">{data.nama}</h1>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <img src="/ub-logo-small.png" alt="UB" className="h-4 w-auto" />
                <span className="text-[10px] font-extrabold text-blue-900 tracking-tight uppercase">
                  Universitas Brawijaya
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-gray-50 pt-4">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tighter">Kelas</p>
                <p className="text-xs font-bold text-gray-700">{data.kelas}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tighter">Prodi</p>
                <p className="text-xs font-bold text-gray-700">{data.prodi}</p>
              </div>
            </div>

            <div>
              <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Domisili</p>
              <p className="text-xs text-gray-600 leading-snug">{data.domisili}</p>
            </div>

            <div>
              <h3 className="text-[9px] text-blue-900 uppercase font-bold mb-1">Tentang Diri</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed text-justify italic">
                {data.tentangDiri}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-6 text-center text-gray-400 text-[10px]">
        &copy; 2026 {data.nama} | Teknologi Informasi UB
      </footer>
    </div>
  );
}