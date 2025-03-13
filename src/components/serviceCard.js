// components/ServiceCards.js
export default function ServiceCards() {
    const services = [
      { 
        title: 'Billboard',
        desc: 'Pemasangan billboard ukuran besar',
        icon: '📢'
      },
      {
        title: 'Neon Box',
        desc: 'Neon box custom untuk usaha Anda',
        icon: '🌟'
      },
      {
        title: 'Digital Printing',
        desc: 'Cetak spanduk, sticker, banner',
        icon: '🖨️'
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }