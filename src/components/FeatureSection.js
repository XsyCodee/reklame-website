import Image from 'next/image';

export default function FeatureSection() {
  const features = [
    {
      title: 'Neon Box',
      desc: 'Kami memproduksi neonbox dengan dua jenis bahan yaitu backlite dan akrilik. Neon box cocok sebagai media promosi untuk segala macam bisnis.',
      link: '#',
      image: '/images/neon-box.jpeg' // Pastikan path gambar benar
    },
    {
      title: 'Papan Nama',
      desc: 'Papan nama terdiri dari dua jenis yaitu papan nama alumunium dan papan nama cat serta bisa dikombinasikan dengan akrilik. Media promosi hemat untuk bisnis Anda.',
      link: '#',
      image: '/images/papan-nama.jpeg' // Pastikan file ada di public/images
    },
    {
      title: 'Huruf Timbul',
      desc: 'Huruf timbul terdiri dari tiga jenis bahan yaitu akrilik, galvanis, dan stainless. Cocok untuk berbagai bisnis dan meningkatkan profesionalisme.Huruf timbul terdiri dari tiga jenis bahan yaitu akrilik, galvanis, dan stainless. Cocok untuk berbagai bisnis dan meningkatkan profesionalisme.Huruf timbul terdiri dari tiga jenis bahan yaitu akrilik, galvanis, dan stainless. Cocok untuk berbagai bisnis dan meningkatkan profesionalisme.',
      link: '#',
      image: '/images/huruf-timbull.jpeg' // Pastikan ekstensi file sesuai
    },
    {
      title: 'Digital Print',
      desc: 'Kami memiliki mesin digital printing utuk menghasilkan beberapa produk seperti banner, spanduk, rontek, baliho, billboard, backdrop, dan lain sebagainya.',
      link: '#',
      image: '/images/digital-print.jpeg' // Pastikan ekstensi file sesuai
    },
    {
      title: 'Branding Mobil',
      desc: 'Kendaraan merupakan salah satu media yang bisa dimaanfaatkan salah satunya dengan sticker branding mobil. Anda bisa mempromosikan bisnis dengan menggunakan sticker yang ditempelkan pada mobil.',
      link: '#',
      image: '/images/branding-mobil.jpeg' // Pastikan ekstensi file sesuai
    },
    {
      title: 'Jasa Perbaikan Reklame',
      desc: ' Selain memproduksi reklame dan media promosi, kami juga melayani jasa perbaikan reklame seperti ganti lampu neon box, ganti visual neon box, ganti visual papan nama, pemindahan neon box, dan lain sebagainya.',
      link: '#',
      image: '/images/jasa-perbaikan.jpeg' // Pastikan ekstensi file sesuai
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-2  text-[#5B7F1D] ">APA YANG KAMI TAWARKAN?</h2>
          <h1 className="text-3xl font-bold mb-4 text-[#5B7F1D]">Produk & Layanan Kami</h1>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Kami memberikan pelayanan terbaik untuk semua konsumen dan menghasilkan produk advertising/reklame 
              yang berkualitas serta memberikan pelayanan after sales yang mengutamakan kebutuhan konsumen. 
              Berikut beberapa produk unggulan kami yang bisa Anda pilih.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                  className="opacity-20 group-hover:opacity-90 transition-opacity duration-300 "
                />
              </div>

              {/* Overlay Gradasi */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              
              {/* Konten Teks */}
              <div className="relative p-6 z-20 text-white md-6">
                <h3 className="text-xl font-bold mb-3 text-[#172021]">{feature.title}</h3>
                <p className="mb-20 line-clamp-3 text-[#666666]">{feature.desc}</p>
                
                <a 
                  href={feature.link}
                  className="inline-flex items-center text-black hover:underline font-medium transition-colors"
                >
                  Selengkapnya
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
