"use client";

// Dummy data daftar menu
const MOCK_MENUS = [
  { id: 1, name: "Matcha Late", category: "Minuman", status: "Tersedia", price: 20000 },
  { id: 2, name: "Americano", category: "Minuman", status: "Tersedia", price: 30000 },
  { id: 3, name: "CheesCake", category: "Makanan", status: "Tersedia", price: 40000 },
];

export default function DaftarMenuPage() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-8 border-b border-[#D1A68A]/30">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight uppercase">DAFTAR MENU</h1>
          <p className="text-sm text-[#4A2C1A]/60 font-medium">Kelola semua listing cafe dan spot nongkrong.</p>
        </div>
        
        <button className="bg-[#4A2C1A] text-[#FCF9F2] text-[10px] font-bold tracking-[0.2em] px-8 py-4 rounded-full hover:bg-[#A67C52] transition-all duration-300">
          TAMBAH MENU BARU
        </button>
      </header>

      {/* DATA TABLE */}
      <div className="bg-white border border-[#D1A68A]/20 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#D1A68A]/20 bg-[#D1A68A]/5">
              <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-[#A67C52] uppercase">Nama Menu</th>
              <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-[#A67C52] uppercase">Kategori</th>
              <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-[#A67C52] uppercase">Status</th>
              <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-[#A67C52] uppercase">Harga</th>
              <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-[#A67C52] uppercase text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D1A68A]/10">
            {MOCK_MENUS.map((menu) => (
              <tr key={menu.id} className="hover:bg-[#FCF9F2] transition-colors group">
                <td className="p-6 text-sm font-bold text-[#4A2C1A]">{menu.name}</td>
                <td className="p-6 text-xs font-medium text-[#4A2C1A]/60">{menu.category}</td>
                <td className="p-6">
                  <span className={`text-[9px] font-black px-3 py-1 rounded-full border ${
                    menu.status === 'PUBLISHED' ? 'border-green-200 text-green-700 bg-green-50' : 'border-yellow-200 text-yellow-700 bg-yellow-50'
                  }`}>
                    {menu.status}
                  </span>
                </td>
                <td className="p-6 text-xs font-bold text-[#4A2C1A]/80">{menu.price}</td>
                <td className="p-6 text-right space-x-6">
                  <button className="text-[10px] font-bold text-[#A67C52] hover:text-[#4A2C1A] uppercase tracking-widest">Edit</button>
                  <button className="text-[10px] font-bold text-red-800 hover:text-red-500 uppercase tracking-widest">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}