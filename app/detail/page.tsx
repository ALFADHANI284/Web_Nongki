"use client";

import Image from "next/image";
import Link from "next/link";

// Mock Data dummy
const CAFE_DETAIL = {
  name: "SOCIETY COFFEE HOUSE",
  location: "Jl. Prof. Dr. Suharso, Purwokerto Timur",
  instagram: "@societycoffee.pwt",
  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
  description: "Menghadirkan pengalaman ngopi dengan nuansa industrial minimalis di tengah kota Purwokerto. Ruangan luas, pencahayaan alami yang maksimal, dan meja yang didesain khusus untuk kenyamanan bekerja maupun bersantai panjang. Biji kopi dipanggang sendiri untuk memastikan kualitas di setiap cangkirnya.",
  menu: {
    kopi: [
      { name: "SIGNATURE AREN LATTE", price: "28K", desc: "Espresso, susu, gula aren lokal" },
      { name: "CARAMEL MACCHIATO", price: "32K", desc: "Espresso, susu, vanilla, karamel" },
      { name: "FILTER COFFEE (V60)", price: "25K", desc: "Pilihan beans lokal & import" },
    ],
    nonKopi: [
      { name: "MATCHA LATTE", price: "30K", desc: "Premium Uji Matcha, susu" },
      { name: "ARTISAN TEA", price: "22K", desc: "Earl grey / Chamomile / Jasmine" },
    ],
    makanan: [
      { name: "TRUFFLE FRIES", price: "25K", desc: "Kentang goreng, truffle oil, parmesan" },
      { name: "ALMOND CROISSANT", price: "28K", desc: "Croissant mentega dengan krim almond" },
    ]
  }
};

export default function CafeDetailPage() {
  return (
    <main className="min-h-screen bg-[#FCF9F2] text-[#4A2C1A] font-sans relative pb-24">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/coffee-bean-subtle.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
        }}
      />

      {/* Navigasi */}
      <div className="max-w-5xl mx-auto px-6 py-8 relative z-10">
        <Link href="/" className="text-xs font-bold tracking-widest text-[#A67C52] hover:text-[#4A2C1A] uppercase transition-colors">
          KEMBALI KE BERANDA
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION (Nama, IG, Lokasi) */}
        <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#D1A68A]/30 pb-10">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#4A2C1A] uppercase leading-none">
              {CAFE_DETAIL.name}
            </h1>
            <p className="text-sm font-bold tracking-wider text-[#A67C52] uppercase">
              LOKASI: {CAFE_DETAIL.location}
            </p>
          </div>
          
          <div className="text-xs font-bold tracking-widest text-[#4A2C1A] uppercase border border-[#D1A68A]/40 px-6 py-3 rounded-full hover:bg-[#4A2C1A] hover:text-[#FCF9F2] transition-colors cursor-pointer inline-block mx-auto md:mx-0">
            INSTAGRAM: {CAFE_DETAIL.instagram}
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden border border-[#D1A68A]/20 mb-16 shadow-lg">
          <Image
            src={CAFE_DETAIL.image}
            alt={CAFE_DETAIL.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-xs font-bold tracking-widest text-[#A67C52] uppercase mb-6">
            TENTANG TEMPAT INI
          </p>
          <p className="text-lg md:text-xl text-[#4A2C1A]/80 leading-relaxed">
            {CAFE_DETAIL.description}
          </p>
        </div>

        {/* MENU SECTION */}
        <section className="max-w-4xl mx-auto border-t border-[#D1A68A]/30 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-widest text-[#4A2C1A] uppercase">
              DAFTAR MENU
            </h2>
            <div className="w-12 h-[2px] bg-[#A67C52] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            
            {/* Kategori: Kopi */}
            <div>
              <h3 className="text-sm font-bold tracking-widest text-[#A67C52] uppercase border-b border-[#D1A68A]/30 pb-4 mb-6">
                RACIKAN KOPI
              </h3>
              <div className="space-y-6">
                {CAFE_DETAIL.menu.kopi.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-bold text-[#4A2C1A] uppercase tracking-wide group-hover:text-[#A67C52] transition-colors">{item.name}</h4>
                      <span className="text-sm font-bold text-[#A67C52]">{item.price}</span>
                    </div>
                    <p className="text-xs text-[#4A2C1A]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kategori: Non-Kopi */}
            <div>
              <h3 className="text-sm font-bold tracking-widest text-[#A67C52] uppercase border-b border-[#D1A68A]/30 pb-4 mb-6">
                BUKAN KOPI
              </h3>
              <div className="space-y-6">
                {CAFE_DETAIL.menu.nonKopi.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-bold text-[#4A2C1A] uppercase tracking-wide group-hover:text-[#A67C52] transition-colors">{item.name}</h4>
                      <span className="text-sm font-bold text-[#A67C52]">{item.price}</span>
                    </div>
                    <p className="text-xs text-[#4A2C1A]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kategori: Makanan */}
            <div className="md:col-span-2 md:max-w-md md:mx-auto w-full mt-8 md:mt-0">
              <h3 className="text-sm font-bold tracking-widest text-[#A67C52] uppercase border-b border-[#D1A68A]/30 pb-4 mb-6 text-center md:text-left">
                KUDAPAN
              </h3>
              <div className="space-y-6">
                {CAFE_DETAIL.menu.makanan.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-bold text-[#4A2C1A] uppercase tracking-wide group-hover:text-[#A67C52] transition-colors">{item.name}</h4>
                      <span className="text-sm font-bold text-[#A67C52]">{item.price}</span>
                    </div>
                    <p className="text-xs text-[#4A2C1A]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}