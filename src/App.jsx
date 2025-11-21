import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: "Peach Glow Toner", brand: "Anua", price: 380, img: "https://i.imgur.com/8z3Kj0M.jpg" },
  { id: 2, name: "Heartleaf 80% Ampoule", brand: "Anua", price: 420, img: "https://i.imgur.com/j5pX8kZ.jpg" },
  { id: 3, name: "Rice Ceramide Moisturizer", brand: "Beauty of Joseon", price: 360, img: "https://i.imgur.com/0pL9kXs.jpg" },
  { id: 4, name: "Green Tea Serum", brand: "iUNIK", price: 290, img: "https://i.imgur.com/Qw8K9vL.jpg" },
  { id: 5, name: "Glow Serum", brand: "Beauty of Joseon", price: 399, img: "https://i.imgur.com/X7mK2pN.jpg" },
  { id: 6, name: "Centella Gel", brand: "SKIN1004", price: 320, img: "https://i.imgur.com/Rt5pL9k.jpg" }
];

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-3xl" style={{fontFamily: "'Dancing Script', cursive", color: "#ff69b4"}}>
            NudeBloom Essencials
          </h1>
          <button className="bg-pink-100 px-4 py-2 rounded-full flex items-center gap-2">
            <ShoppingBag size={20} /> Cart ({cart.length})
          </button>
        </div>
      </header>

      <div className="py-16 px-4 text-center bg-gradient-to-b from-pink-50 to-white">
        <h2 className="text-5xl mb-3" style={{fontFamily: "'Dancing Script', cursive", color: "#ff69b4"}}>Glow Like Never Before ♡</h2>
        <p className="text-lg text-pink-600">Authentic Korean Skincare • Glass Skin Guaranteed</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
              <Heart className="absolute top-3 right-3 text-white drop-shadow" fill="pink" />
            </div>
            <div className="p-4">
              <p className="text-sm text-pink-500">{p.brand}</p>
              <h3 className="font-semibold">{p.name}</h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text-2xl font-bold text-pink-600">R{p.price}</span>
                <button onClick={() => {setCart([...cart, p]); alert("Added ♡")}} 
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-5 py-2 rounded-full text-sm">
                  Add to Cart ♡
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-pink-50 py-8 text-center text-pink-600">
        © 2025 NudeBloom Essencials • Made with love in SA 💕
      </footer>
    </>
  );
}
