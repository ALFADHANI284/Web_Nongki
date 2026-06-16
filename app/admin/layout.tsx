"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 

  const MENU_ITEMS = [
    { name: "RINGKASAN", path: "/admin" },
    { name: "DAFTAR TEMPAT", path: "/admin/daftar-tempat" },
    { name: "DAFTAR MENU", path: "/admin/daftar-menu"},
    { name: "PENGATURAN", path: "/admin/pengaturan" },
  ];

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#4A2C1A] font-sans flex relative">
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/coffee-bean-subtle.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
        }}
      />

      {/* SIDEBAR */}
      <aside className="w-64 border-r border-[#D1A68A]/30 p-10 hidden lg:block relative z-10 bg-white/50 backdrop-blur-md">
        <div className="mb-20">
          <Link href="/" className="text-xl font-black tracking-tighter text-[#4A2C1A]">
            NONGKI <span className="text-[#A67C52]">IN</span>
          </Link>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#A67C52] mt-1">ADMIN PANEL</p>
        </div>

        <nav className="space-y-10">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`block text-xs font-bold tracking-widest uppercase transition-colors ${
                  isActive
                    ? "text-[#4A2C1A] border-l-2 border-[#4A2C1A] pl-4"
                    : "text-[#4A2C1A]/40 hover:text-[#A67C52]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-10">
          <Link href="/login" className="text-xs font-bold tracking-widest text-red-800 hover:text-red-600 transition-colors">
            KELUAR AKUN
          </Link>
        </div>
      </aside>

      {/* AREA KONTEN UTAMA (Berubah-ubah sesuai URL) */}
      <section className="flex-1 p-8 lg:p-16 relative z-10 overflow-y-auto">
        {children}
      </section>
    </div>
  );
}