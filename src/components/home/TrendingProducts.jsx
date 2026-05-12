import products from "../../data/products";
import ProductCard from "../product/ProductCard";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TrendingProducts() {
  const navigate = useNavigate();

  const trendingProducts = useMemo(() => {
    return [...products]
      .sort(
        (a, b) =>
          b.rating + (b.discount || 0) * 0.1 -
          (a.rating + (a.discount || 0) * 0.1)
      )
      .slice(0, 8);
  }, []);

  return (
    <section className="md:py-24 py-10 bg-slate-50">

      {/* TOAST CONTAINER (ONLY ONCE IN APP) */}
      <ToastContainer />

      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              🔥 Trending Products
            </h2>

            <p className="text-slate-500 mt-1 text-sm">
              Most popular and high-rated items this week
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/shop")}
            className="text-blue-600 font-medium"
          >
            View All →
          </motion.button>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* ONLY PRODUCT CARD */}
              <ProductCard product={product} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}