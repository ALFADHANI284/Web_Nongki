"use client";

import Image from "next/image";
import Link from "next/link";

// Mock Data sementara untuk listing cafe
const MOCK_CAFES = [
  {
    id: 1,
    name: "Society Coffee House",
    location: "Purwokerto Utara",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    description: "Coffeeshop dengan vibe industrial minimalis, cocok untuk nugas dan santai.",
  },
  {
    id: 2,
    name: "Loja De Cafe",
    location: "Purwokerto Lor",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
    description: "Tempat nongki estetik dengan area outdoor yang luas dan nyaman.",
  },
  {
    id: 3,
    name: "Kopi Kepprok",
    location: "Baturraden",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    description: "Nongki dengan pemandangan gunung dan udara sejuk Baturraden.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#4A2C1A] font-sans relative">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/coffee-bean-subtle.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
        }}
      />

      {/* HEADER */}
      <header className="border-b border-[#D1A68A]/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#4A2C1A] tracking-tight">
            NONGKI <span className="text-[#A67C52]">IN</span>
          </Link>
          {/* Menu & Auth Wrapper */}
          <div className="flex items-center gap-10">
            {/* Navigasi Utama */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: 'BERANDA', href: '/' },
                { name: 'LOKASI', href: '/explore' }, 
                { name: 'MENU', href: '/#menu' }, 
                { name: 'TENTANG KAMI', href: '/about' }, 
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-bold tracking-wider text-[#4A2C1A]/80 hover:text-[#A67C52] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Tombol Login */}
            <Link
              href="/login"
              className="text-xs font-bold tracking-widest uppercase text-[#4A2C1A] border border-[#4A2C1A] px-6 py-2.5 hover:bg-[#4A2C1A] hover:text-white transition-all duration-300"
            >
              MASUK
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 relative border-b border-[#D1A68A]/30">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="w-[100px] h-[1px] bg-[#D1A68A]/30 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4A2C1A]">
            SPOT NONGKI <span className="text-[#A67C52]">TERBAIK</span>
          </h1>
          <p className="text-[#4A2C1A]/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Temukan kenyamanan di setiap sudut Purwokerto dan sekitarnya untuk waktu bersantai Anda.
          </p>
          <div className="w-[100px] h-[1px] bg-[#D1A68A]/30 mx-auto" />
        </div>


        <div className="max-w-5xl mx-auto px-6 mt-16 relative">
          <div className="absolute top-10 inset-0 -mx-10 scale-105">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-5 h-5 bg-[#D1A68A]/20 rounded-full blur-[2px] opacity-40"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
              />
            ))}
          </div>
          <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto bg-white rounded-full p-2 border-[15px] border-[#D1A68A]/20 shadow-xl shadow-[#D1A68A]/10 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1514432324605-893114972f3e?q=80&w=800&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* LISTING SECTION */}
      <section className="py-24 border-b border-[#D1A68A]/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#4A2C1A] text-center mb-16 tracking-wide">
            Yang Lagi <span className="text-[#A67C52]">Viral</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {MOCK_CAFES.map((cafe) => (
              // CARD CAFE 
              <div
                key={cafe.id}
                className="group border border-[#D1A68A]/20 rounded-2xl p-6 space-y-6 hover:border-[#D1A68A]/50 transition-colors"
              >
                {/* Gambar Cafe */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#D1A68A]/30">
                  <Image
                    src={cafe.image}
                    alt={cafe.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info Cafe */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#4A2C1A] group-hover:text-[#A67C52] transition-colors">
                    {cafe.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#A67C52]">
                    {cafe.location}
                  </p>
                  <p className="text-sm text-[#4A2C1A]/70 leading-relaxed line-clamp-2">
                    {cafe.description}
                  </p>
                </div>

                {/* Detail */}
                <Link
                  href="#"
                  className="block text-center text-xs font-bold text-[#4A2C1A] hover:text-[#A67C52] border-t border-[#D1A68A]/30 pt-5 mt-4 transition-colors"
                >
                  DETAIL LOKASI
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL INFO SECTION */}
      <section className="py-32 bg-[#FCF9F2] border-b border-[#D1A68A]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
          
          {/* Heading Section */}
          <div className="space-y-4 relative z-10">
            <p className="text-xs font-bold tracking-widest text-[#A67C52] uppercase">
              Kategori Eksplorasi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A2C1A] tracking-wide max-w-xl mx-auto leading-snug uppercase">
              TEMUKAN VIBES YANG COCOK BUAT HARI INI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 items-center">
            
            {/* Kolom Kiri */}
            <div className="grid grid-cols-1 gap-16 text-left md:text-right">
              {[
                { 
                  id: '01', 
                  title: 'FOKUS NUGAS & PRODUKTIF', 
                  text: 'Suasana tenang, WiFi kenceng, dan banyak colokan. Cocok buat yang lagi ngejar deadline tugas atau remote working.' 
                },
                { 
                  id: '02', 
                  title: 'SANTAI SORE OUTDOOR', 
                  text: 'Pemandangan alam terbuka, angin sejuk khas Baturraden, pas banget buat healing tipis-tipis abis capek beraktivitas.' 
                },
              ].map((item) => (
                <div key={item.id} className="space-y-3 relative group cursor-pointer">
                  <span className="text-6xl font-black text-[#D1A68A]/10 absolute -top-8 md:-right-4 right-0 z-0 transition-colors duration-500 group-hover:text-[#D1A68A]/25">
                    {item.id}
                  </span>
                  
                  {/* Konten Teks */}
                  <div className="relative z-10">
                    <h4 className="text-sm font-bold tracking-wider text-[#4A2C1A] group-hover:text-[#A67C52] transition-colors uppercase">{item.title}</h4>
                    <p className="text-sm text-[#4A2C1A]/70 leading-relaxed mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gambar Representasi Vibes */}
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto bg-white p-2 border border-[#D1A68A]/30 shadow-2xl shadow-[#4A2C1A]/5 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-4 border border-white/40 z-10 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden">
                {/* <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                  alt="Suasana Cafe Estetik"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="grid grid-cols-1 gap-16 text-left">
              {[
                { 
                  id: '03', 
                  title: 'ESTETIK & FOTO OOTD', 
                  text: 'Interior cakep, pencahayaan bagus, dan sudut-sudut instagramable yang bikin feeds lo makin estetik.' 
                },
                { 
                  id: '04', 
                  title: 'MALAM CHILL & LIVE MUSIC', 
                  text: 'Tutup hari dengan ngopi santai bareng sirkel tongkrongan ditemani iringan musik akustik lokal yang asik.' 
                },
              ].map((item) => (
                <div key={item.id} className="space-y-3 relative group cursor-pointer">
                  <span className="text-6xl font-black text-[#D1A68A]/10 absolute -top-8 left-0 z-0 transition-colors duration-500 group-hover:text-[#D1A68A]/25">
                    {item.id}
                  </span>
                  
                  {/* Konten Teks */}
                  <div className="relative z-10">
                    <h4 className="text-sm font-bold tracking-wider text-[#4A2C1A] group-hover:text-[#A67C52] transition-colors uppercase">{item.title}</h4>
                    <p className="text-sm text-[#4A2C1A]/70 leading-relaxed mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-[#D1A68A]/10 mt-16 text-[#4A2C1A]/60">
        <p className="text-xs font-medium">
          Nongki In © 2026 - Spot Nongki Pilihan Purwokerto.
        </p>
      </footer>
    </main>
  );
}