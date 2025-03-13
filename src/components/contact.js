import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bagian Gambar (Kiri) */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl order-1 md:order-none">
            <Image
              src="/images/huruf-timbul.jpeg" // Ganti dengan path gambar Anda
              alt="Travel Photo"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bagian Teks (Kanan) */}
          <div className="text-center md:text-left order-2 md:order-none">
            <h1 className="text-3xl font-bold text-[#5B7F1D] mb-6 uppercase tracking-wider">
            SDM yang Kompeten di bidang advertising
            </h1>

            <p className="text-[#666666] text-lg mb-12 leading-relaxed">
            <strong>ReklameKita</strong> terdiri atas profesional muda yang kompeten dalam bidang promotion dan media online.
             Sumber daya manusia yang mumpuni merupakan salah satu keunggulan kami dalam melayani anda.
            </p>

            {/*Bagian SVG */}
            <p className="flex items-center">
                <Image src="/svg/angle-right-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                <span className="ml-1">Pilihan produk reklame yang bervariasi dan berkualitas</span>
                </p>
                <p className="flex items-center">
                <Image src="/svg/angle-right-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                <span className="ml-1">Bisa konsultasi <strong>GRATIS</strong></span>
                </p>
                <p className="flex items-center">
                <Image src="/svg/angle-right-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                <span className="ml-1">Survey lokasi <strong>GRATIS</strong></span>
                </p>
                <p className="flex items-center">
                <Image src="/svg/angle-right-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                <span className="ml-1">Garansi produk 1 tahun (untuk produk tertentu)</span>
                </p>
                <p className="flex items-center">
                <Image src="/svg/angle-right-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                <span className="ml-1">Customer Service Fast Respon</span>
                </p>
                <p className="flex items-center">
                <Image src="/svg/angle-right-svgrepo-com.svg" alt="Arrow Icon" width={50} height={20} />
                <span className="ml-1">Perbaikan dan maintenance reklame</span>
            </p>

            <a 
              className="bg-[#5B7F1D] text-white px-8 py-3 rounded-full 
              text-lg font-semibold hover:bg-[#FBBB7B] transition-all duration-300
              shadow-lg hover:shadow-xl"
              href="https://web.whatsapp.com/send?phone=6281294888613&amp;text=Halo%20Mbak%20Yona,%20Reklame%20Kita.%20Saya%20mengunjungi%20artikel%20:%20home%20|%20Reklame%20Kita,%20Saya%20ingin%20bertanya%20mengenai.....">Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}