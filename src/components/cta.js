// components/CTA.js
export default function CTA() {
    return (
      <section className="relative py-20 bg-[#FAF0E2] overflow-hidden">
        {/* Efek Visual */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Siap Meningkatkan Bisnis Anda?
            </h2>
            <p className="text-lg text-black/90 mb-8">
              Mulai dalam 30 detik. Gratis konsultasi dengan ahli marketing kami!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Mulai Sekarang Gratis
              </button>
              
              <button className="border-2 border-white/30 text-black px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  Tonton Demo
                </span>
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-black/80">
              <svg 
                className="w-5 h-5 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-sm">
                Gratis setup • Tidak perlu kartu kredit • Batal kapan saja
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }