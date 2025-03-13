// app/layout.js
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nama Brand - Solusi Marketing Terbaik',
  description: 'Tingkatkan bisnis Anda dengan layanan marketing profesional',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}