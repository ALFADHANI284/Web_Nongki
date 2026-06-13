"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register dengan:", { name, email, password });
  };

  return (
    <main className="min-h-screen bg-[#FCF9F2] text-[#4A2C1A] font-sans flex items-center justify-center px-6 relative">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/coffee-bean-subtle.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
        }}
      />

      <div className="w-full max-w-md bg-white border border-[#D1A68A]/30 rounded-2xl p-8 space-y-8 shadow-sm relative z-10">
        {/* Header Form */}
        <div className="text-center space-y-2">
          <Link href="/" className="text-sm font-bold tracking-widest text-[#A67C52] block mb-2">
            NONGKI IN
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Buat Akun</h1>
          <p className="text-xs text-[#4A2C1A]/60 uppercase tracking-wider">
            Gabung untuk simpan tempat favoritmu
          </p>
        </div>

        {/* Form Register */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#4A2C1A]/80">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap"
              required
              className="w-full bg-transparent border border-[#D1A68A]/40 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#4A2C1A] placeholder:text-[#4A2C1A]/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#4A2C1A]/80">
              Alamat Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              required
              className="w-full bg-transparent border border-[#D1A68A]/40 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#4A2C1A] placeholder:text-[#4A2C1A]/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#4A2C1A]/80">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-transparent border border-[#D1A68A]/40 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#4A2C1A] placeholder:text-[#4A2C1A]/30"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4A2C1A] text-[#FCF9F2] text-xs font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#A67C52] transition-colors duration-300"
          >
            DAFTAR SEKARANG
          </button>
        </form>

        {/* Footer Form */}
        <p className="text-center text-xs text-[#4A2C1A]/70">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-bold text-[#A67C52] hover:underline">
            MASUK DI SINI
          </Link>
        </p>
      </div>
    </main>
  );
}