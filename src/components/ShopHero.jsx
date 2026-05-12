import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function ShopHero() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category = params.get("category");
  const brand = params.get("brand");

  return (
    <div className="relative overflow-hidden rounded-3xl mb-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative p-8 md:p-12 text-white">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1 rounded-full text-xs font-medium"
        >
          ⚡ Premium Tech Collection
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mt-4 leading-tight"
        >
          {category
            ? `${category.toUpperCase()} Collection`
            : "All Premium Products"}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-white/80 max-w-xl"
        >
          {brand
            ? `Discover best ${brand} products with official warranty & fast delivery in Bangladesh`
            : "Explore top-quality electronics, gadgets and accessories at unbeatable prices"}
        </motion.p>

        {/* FILTER TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mt-6"
        >
          {category && (
            <span className="bg-white/15 px-4 py-1 rounded-full text-sm">
              📦 {category}
            </span>
          )}

          {brand && (
            <span className="bg-white/15 px-4 py-1 rounded-full text-sm">
              🏷 {brand}
            </span>
          )}

          {!category && !brand && (
            <span className="bg-white/15 px-4 py-1 rounded-full text-sm">
              🔥 Trending Now
            </span>
          )}
        </motion.div>

      </div>
    </div>
  );
}