export default function Pricing() {
    const plans = [
      {
        name: 'Starter',
        price: 'Rp 1,5jt',
        features: ['SEO Basic', '2 Platform Media Sosial', 'Laporan Bulanan']
      },
      {
        name: 'Professional',
        price: 'Rp 3,5jt',
        features: ['SEO Advance', '4 Platform Media Sosial', 'Content Strategy', 'Laporan Mingguan']
      },
      {
        name: 'Enterprise',
        price: 'Rp 6jt',
        features: ['Full Package', 'Priority Support', 'Custom Strategy', 'Analytics Dashboard']
      }
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-2  text-[#5B7F1D] ">In the gallery</h2>
          <h1 className="text-3xl font-bold mb-4 text-[#5B7F1D]">Galeri Portofolio</h1>
          <div class="gb-container gb-container-091135ca"></div>
          <p className="text-[#666666] max-w-2xl mx-auto">
          Kumpulan protofolio produk dan pemasangan yang kami kerjakan.

          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }