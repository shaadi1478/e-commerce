import products from "../../data/products";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FlashSale() {
  const navigate = useNavigate();

  const targetTime = useRef(
    new Date().getTime() + 2 * 60 * 60 * 1000
  );

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const flashProducts = products.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime.current - now;

      if (diff <= 0) return;

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:py-16 py-8 bg-slate-50">

      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-black/5 rounded-2xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-sm"
        >

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              🔥 Flash Sale
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Limited time offers — grab before it ends
            </p>

            {/* TIMER */}
            <div className="flex items-center gap-2 mt-3 text-sm font-mono font-bold">

              <span className="text-slate-500 font-normal">Ends in:</span>

              <span className="bg-slate-100 px-3 py-1 rounded-lg">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>

              <span>:</span>

              <span className="bg-slate-100 px-3 py-1 rounded-lg">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>

              <span>:</span>

              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>

            </div>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/shop")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            View All Products
          </motion.button>

        </motion.div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">

          {flashProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative w-full h-44 overflow-hidden bg-slate-50">

                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -{p.discount || 20}%
                </span>

              </div>

              {/* INFO */}
              <div className="p-3">

                <h3 className="text-slate-800 text-sm line-clamp-2 min-h-[40px] hover:text-blue-600 transition">
                  {p.name}
                </h3>

                <p className="text-blue-600 font-bold text-lg mt-1">
                  ৳ {p.price}
                </p>

                <p className="text-yellow-500 text-sm">
                  ⭐ {p.rating || 4.5}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/product/${p.id}`)}
                  className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <FiShoppingCart size={14} />
                  Buy Now
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}