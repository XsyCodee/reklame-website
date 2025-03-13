// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ReklameKita
        </Link>
        
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Beranda</Link>
          <Link href="/produk" className="text-gray-600 hover:text-blue-600">Produk</Link>
          <Link href="/layanan" className="text-gray-600 hover:text-blue-600">Layanan</Link>
          <Link href="/galeri" className="text-gray-600 hover:text-blue-600">Galeri</Link>
          <Link href="/tentang" className="text-gray-600 hover:text-blue-600">Tentang Kami</Link>
        </div>
      </nav>
    </header>
  );
}