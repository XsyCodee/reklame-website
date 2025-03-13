import Image from "next/image";

export default function TentangKami() {
  return (
    <section className="bg-[#1F2A1D] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Bagian Kiri: Gambar */}
        <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/jasa-perbaikan.jpeg" // Ganti dengan path gambar yang sesuai
            alt="Tentang Kami"
            width={800}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Bagian Kanan: Teks */}
        <div className="w-full md:w-1/2">
          <p className="text-sm tracking-wider text-[#A3A791] mb-2">
            LEBIH DEKAT DENGAN REKLAME Kita
          </p>
          <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
          <p className="mb-4 text[#ffffff] leading-relaxed">
            <strong>ReklameKita</strong> adalah media partner promosi yang
            anda butuhkan, baik indoor maupun outdoor. Produk yang kami hasilkan
            diantaranya: Baliho, Banner, Backdrop, Shop Sign, Neon Box, Papan
            Nama, Letter Timbul, Huruf Timbul, Spanduk, Umbul-umbul kain, Umbul
            umbul digital printing, X Banner, T-Banner, Pylon Sign, Totem Sign,
            Offset, dan souvenir.
          </p>

          {/* BAGIAN SVG*/}
          <p className="flex items-center">
                          <Image src="/svg/check-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                          <span className="ml-1">HASIL PRODUK BERKUALITAS</span>
                          </p>
                          <p className="flex items-center">
                          <Image src="/svg/check-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                          <span className="ml-1">SEMUA PRODUK BERGARANSI</span>
                          </p>
                          <p className="flex items-center">
                          <Image src="/svg/check-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                          <span className="ml-1">KONSULTASI GRATIS</span>
                          </p>
                          <p className="flex items-center">
                          <Image src="/svg/check-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                          <span className="ml-1">HARGA SANGAT TERJANGKAU</span>
                      </p>

         
        </div>
      </div>
    </section>
  );
}
