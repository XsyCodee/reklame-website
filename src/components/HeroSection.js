export default function HeroSection() {
  return (
    <section className="bg-[#FAF0E2] text-black py-20">
      <div className="container mx-auto px-4 text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          ReklameKita
        </h1>
        <p className="text-3xl mb-8 text-[#5B7F1D] font-bold font-serif">
        Kami fokus untuk memproduksi sekaligus jasa pemasangan media promosi luar ruang / reklame yang memiliki hasil terbaik dan bergaransi.
        reklameKita merupakan solusi media promosi untuk bisnis Anda.        
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
            Order Sekarang
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white/10">
            Pelajari Lebih
          </button>
        </div>
      </div>
    </section>
  );
}