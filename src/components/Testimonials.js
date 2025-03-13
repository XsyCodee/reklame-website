// components/Testimonials.js
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'CEO TokoOnlineKu',
      text: 'Hasil penjualan meningkat 300% setelah menggunakan layanan mereka. Tim profesional dan responsif!',
      image: '/images/asep.jpg'
    },
    {
      name: 'Siti Aminah',
      role: 'Owner Butik Fashion',
      text: 'Strategi social media marketingnya tepat sasaran. Engagement meningkat drastis hanya dalam 1 bulan.',
      image: '/images/asep.jpg'
    },
    {
      name: 'Andi Wijaya',
      role: 'Direktur UMKM Lokal',
      text: 'Laporan analisisnya detail dan mudah dipahami. Sangat membantu pengambilan keputusan bisnis.',
      image: '/images/asep.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF0E2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Klien Kami?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-75">
          <img src="/brand-logo1.svg" alt="Brand 1" className="h-8" />
          <img src="/brand-logo2.svg" alt="Brand 2" className="h-8" />
          <img src="/brand-logo3.svg" alt="Brand 3" className="h-8" />
          <img src="/brand-logo4.svg" alt="Brand 4" className="h-8" />
        </div>
      </div>
    </section>
  );
}