"use client";

import Link from "next/link";
import Image from "next/image";

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-[#FCF9F2] text-[#4A2C1A] font-sans relative pb-24 overflow-hidden">
      {/* Pola background halus */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/coffee-bean-subtle.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
        }}
      />

      {/* Navigasi / Breadcrumb Text Saja */}
      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        <Link href="/" className="text-xs font-bold tracking-widest text-[#A67C52] hover:text-[#4A2C1A] uppercase transition-colors">
          KEMBALI KE BERANDA
        </Link>
      </div>

      <article className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <header className="mb-20 text-center md:text-left border-b border-[#D1A68A]/30 pb-16">
          <p className="text-xs font-bold tracking-widest text-[#A67C52] uppercase mb-4">
            SEKILAS TENTANG KAMI
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#4A2C1A] uppercase leading-none mb-8">
            BUKAN SEKADAR <br className="hidden md:block" /> 
            DIREKTORI <span className="text-transparent flex-none bg-clip-text bg-gradient-to-r from-[#A67C52] to-[#D1A68A]">BIASA.</span>
          </h1>
        </header>

        {/* STORY SECTION (Layout Majalah 2 Kolom) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-widest text-[#4A2C1A] uppercase border-l-4 border-[#A67C52] pl-6">
              AWAL MULA WACANA
            </h2>
            <div className="text-sm md:text-base text-[#4A2C1A]/80 leading-relaxed space-y-4 pl-7">
              <p>
                Semuanya bermula dari pertanyaan klasik di grup *chat*: <strong>"Hari ini mau nongkrong di mana?"</strong> yang ujung-ujungnya cuma jadi wacana karena bingung nyari tempat yang pas. Kadang pengen nugas butuh colokan, kadang cuma mau *chill* nikmatin angin Baturraden.
              </p>
              <p>
                Dari keresahan itu, <strong>Nongki In</strong> lahir. Kami pengen bikin satu ruang kurasi digital yang ngerangkum semua *hidden gem*, *coffee shop* estetik, sampai *working space* pewe di Purwokerto dan sekitarnya.
              </p>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-md mx-auto md:ml-auto bg-white p-2 border border-[#D1A68A]/30 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-4 border border-white/40 z-10 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="https://images.unsplash.com/photo-1521017430302-b43f4659b8b0?q=80&w=800&auto=format&fit=crop"
                alt="Proses Pembuatan Kopi"
                fill
                className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* VALUES SECTION (Tipografi Besar sebagai pengganti ikon) */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-widest text-[#4A2C1A] uppercase">
              PRINSIP KURASI KAMI
            </h2>
            <div className="w-12 h-[2px] bg-[#A67C52] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "AKURASI VIBES", desc: "Nggak ada *false advertising*. Kalau kami bilang tempatnya sepi buat nugas, berarti emang sunyi." },
              { num: "02", title: "LOKAL & OTENTIK", desc: "Mendukung ekosistem F&B lokal Purwokerto. Dari *roastery* independen sampai warung kopi legendaris." },
              { num: "03", title: "ANTI RIBET", desc: "Satu klik buat tau harga menu, satu klik buat buka *maps*. Desain sebersih mungkin tanpa distraksi." }
            ].map((value, idx) => (
              <div key={idx} className="relative group p-8 border border-[#D1A68A]/20 bg-white/40 hover:bg-white transition-colors duration-300">
                <span className="text-7xl font-black text-[#D1A68A]/15 absolute top-4 right-4 z-0 transition-colors duration-500 group-hover:text-[#D1A68A]/30">
                  {value.num}
                </span>
                <div className="relative z-10 mt-12">
                  <h3 className="text-lg font-black tracking-widest text-[#4A2C1A] uppercase mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#4A2C1A]/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center border-t border-[#D1A68A]/30 pt-16">
          <h2 className="text-2xl font-black tracking-widest text-[#4A2C1A] uppercase mb-4">
            PUNYA REKOMENDASI TEMPAT?
          </h2>
          <p className="text-sm text-[#4A2C1A]/70 mb-8 max-w-lg mx-auto">
            Kalau lo tau ada spot nongkrong *underrated* yang wajib masuk radar kami, kasih tau lewat DM Instagram atau email.
          </p>
          <a 
            href="#" 
            className="inline-block bg-[#4A2C1A] text-[#FCF9F2] text-xs font-bold tracking-[0.2em] px-10 py-4 uppercase hover:bg-[#A67C52] transition-colors duration-300"
          >
            HUBUNGI TIM NONGKI IN
          </a>
        </section>

      </article>
    </main>
  );
}