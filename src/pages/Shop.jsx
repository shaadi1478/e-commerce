import ProductCard from "../components/product/ProductCard";
import products from "../data/products";
import SearchFilter from "../components/product/SearchFilter";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import ToastStack from "../components/ToastStack";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ShopHero from "../components/ShopHero";

export default function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const urlCategory = queryParams.get("category");
  const urlBrand = queryParams.get("brand");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory || "");
  const [brand, setBrand] = useState(urlBrand || "");

  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCategory(urlCategory || "");
    setBrand(urlBrand || "");
  }, [urlCategory, urlBrand]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category
        ? p.category.toLowerCase() === category.toLowerCase()
        : true;

      const matchBrand = brand
        ? p.brand?.toLowerCase() === brand.toLowerCase()
        : true;

      return matchSearch && matchCategory && matchBrand;
    });
  }, [search, category, brand]);

  const visibleProducts = filtered.slice(0, visibleCount);

  const handleAddToCart = (product) => {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        message: `🛒 ${product.name} added to cart`,
      },
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setBrand("");
  };

  // 🎬 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <ToastStack toasts={toasts} />

      <div className="container lg:py-32 py-5">
        <ShopHero />
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Shop Products
        </motion.h1>

        {/* FILTERS */}
        {(brand || category) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-sm text-slate-600"
          >
            {brand && <span className="mr-4">Brand: <b>{brand}</b></span>}
            {category && <span>Category: <b>{category}</b></span>}
          </motion.div>
        )}

        {(brand || category || search) && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={clearFilters}
            className="mb-6 px-4 py-2 bg-white border border-black/10 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            Clear Filters
          </motion.button>
        )}

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        {/* PRODUCTS */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {Array(6).fill(0).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
            >
              <AnimatePresence>
                {visibleProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    layout
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* PAGINATION */}
            {visibleCount < filtered.length && (
              <div className="flex justify-center mt-12">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisibleCount((p) => p + 6)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
                >
                  View More
                </motion.button>

              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-20 text-slate-500"
          >
            No products found 😔
          </motion.div>
        )}

      </div>
    </div>
  );
}