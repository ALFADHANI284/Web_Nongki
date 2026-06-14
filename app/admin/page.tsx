"use client";

export default function AdminRingkasan() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-8 border-b border-[#D1A68A]/30">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight uppercase">RINGKASAN</h1>
          <p className="text-sm text-[#4A2C1A]/60 font-medium">Overview statistik Nongki In hari ini.</p>
        </div>
      </header>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { label: 'TOTAL TEMPAT', value: '24' },
          { label: 'PENGUNJUNG MINGGU INI', value: '3.8K' },
          { label: 'ULASAN BARU', value: '12' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-[#D1A68A]/20 p-8 rounded-2xl shadow-sm space-y-4">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#A67C52] uppercase">{stat.label}</p>
            <h2 className="text-5xl font-black text-[#4A2C1A]">{stat.value}</h2>
          </div>
        ))}
      </div>
    </>
  );
}