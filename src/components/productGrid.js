// components/ProductGrid.js
export default function ProductGrid() {
    const products = [
      {
        title: "Billboard Jalan Raya",
        price: "Rp 15.000.000",
        image: "/images/billboard.jpg"
      },
      {
        title: "Neon Box Custom",
        price: "Rp 3.500.000",
        image: "/images/neon-box.jpg"
      },
      {
        title: "Spanduk Vinyl",
        price: "Rp 500.000",
        image: "/images/spanduk.jpg"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produk Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }